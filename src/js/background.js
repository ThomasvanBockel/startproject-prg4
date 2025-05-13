import { Actor, Vector, randomInRange } from "excalibur"
import { Resources } from './resources.js'

export class Background extends Actor {
    constructor() {
        super()
        this.graphics.use(Resources.Background.toSprite())
        this.scale = new Vector(0.5, 0.8)
        this.pos = new Vector(400, 250)
    }
}