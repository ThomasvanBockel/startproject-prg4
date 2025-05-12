import { Actor, Vector, randomInRange} from "excalibur";
import { Resources} from './resources.js'

export class Bubble extends Actor {
    constructor() {
        super()
            this.graphics.use(Resources.Bubble.toSprite())
            this.pos = new Vector(randomInRange(0, 800), 450)
            this.vel = new Vector(0, randomInRange(0, -100))
            this.scale = new Vector(0.07, 0.07)
            this.events.on("exitviewport", (e) => this.bubbleDown(e))
    }
    bubbleDown(e) {
        e.target.pos = new Vector(randomInRange(0, 800), 450)
    }
}