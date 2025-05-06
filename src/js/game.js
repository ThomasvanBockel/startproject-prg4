import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, randomInRange } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Game extends Engine {

    constructor() {
        super({ 
            width: 800,
            height: 450,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
         })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")
        for (let i = 0; i < 100; i++) {
            const fish = new Actor()
            fish.graphics.use(Resources.Fish.toSprite())
            fish.pos = new Vector(randomInRange(0, 800), randomInRange(0, 450))
            fish.vel = new Vector(randomInRange(-500, 0), randomInRange(-100, 250))
            fish.events.on("exitviewport", (e) => this.fishLeft(e))
            this.add(fish)
           
        }
        
        for (let i = 0; i < randomInRange(100, 1000); i++) {
            const bubble = new Actor()
            bubble.graphics.use(Resources.Bubble.toSprite())
            bubble.pos = new Vector(randomInRange (0, 800), 450)
            bubble.vel = new Vector(0, randomInRange(0, -100) )
            bubble.scale = new Vector(0.2, 0.2)
            this.add(bubble)
        }
            
    }


    fishLeft(e) {
        e.target.pos = new Vector(randomInRange (0, 800), randomInRange (0, 450))
    }
    
}

new Game()