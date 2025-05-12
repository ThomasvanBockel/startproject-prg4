import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, randomInRange } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Fish } from "./fish.js"
import { Bubble } from './bubble.js'
import { Shark } from "./shark.js"
import {Background} from "./background.js"

export class Game extends Engine {

    constructor() {
        super({
            width: 800,
            height: 450,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        })
        this.start(ResourceLoader).then(() => this.startGame())
        this.showDebug(true)
    }

    startGame() {
        console.log("start de game!")
        
        const background = new Background()
        this.add(background)


        for (let i = 0; i < 100; i++) {
            const fish = new Fish()
            this.add(fish)
        }

        const shark = new Shark()
        this.add(shark)

        for (let i = 0; i < randomInRange(100, 1000); i++) {
            const bubble = new Bubble()
            this.add(bubble)
        }


    }

}

new Game()