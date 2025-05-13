import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, randomInRange, Font, FontUnit, Color, Label } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Fish } from "./fish.js"
import { Bubble } from './bubble.js'
import { Shark } from "./shark.js"
import { Background } from "./background.js"



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

        this.score = 0

        
        const background = new Background()
        this.add(background)
        
        
        for (let i = 0; i < 100; i++) {
            const fish = new Fish()
            this.add(fish)
        }

        const shark = new Shark()
        this.add(shark)
        
        for (let i = 0; i < 1000; i++) {
            const bubble = new Bubble()
            this.add(bubble)

        }
        this.scoreLabel = new Label({
            text: 'Score: 0',
            pos: new Vector(350, 0),
            font: new Font({
                family: 'Arial',
                size: 24,
                unit: FontUnit.Px,
                color: Color.Red
             
            })
        })
        
        this.add(this.scoreLabel)
        this.scoreLabel.text = 'Score: 0'

    }
    
    addscore(){
    console.log("reh")
    this.score++
    this.scoreLabel.text = `Score: ${this.score}`
}

}

new Game()