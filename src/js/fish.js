import { Actor, Vector, randomInRange} from "excalibur";
import { Resources} from './resources.js'

export class Fish extends Actor {
    constructor() {
        super({width: 100, height: 80})
        console.log(`i am a fishy fish`)
        this.graphics.use(Resources.Fish.toSprite())
        this.pos = new Vector(randomInRange(0, 800), randomInRange(0, 450))
        this.vel = new Vector(randomInRange(-500, 0),0)
        this.events.on("exitviewport", (e) => this.fishLeft(e))
this.scale = new Vector(0.7, 0.7)
    }

    fishLeft(e) {
        e.target.pos = new Vector(900, randomInRange(0, 450))
    }
    onPostKill() {
        this.unkill()
        this.pos = new Vector(900, randomInRange(0, 450))
    }
}