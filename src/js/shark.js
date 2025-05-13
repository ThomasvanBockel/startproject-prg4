import { Actor, Vector, Keys, Font,  FontUnit, Color, Label } from "excalibur"
import { Resources } from './resources.js'
import {Fish} from "./fish.js"
let points = 0
export class Shark extends Actor {
    constructor() {
        super({ width: 250, height: 100 })
        console.log("i am a sharky shark")
        
        this.graphics.use(Resources.Shark.toSprite())
        this.scale = new Vector(-1, 1)
        this.pos = new Vector(0, 225)
        this.vel = new Vector(0, 0)

        this.events.on("exitviewport", (e) => this.sharkLeft(e))
    }
    
    onInitialize(engine){
        this.on('collisionstart', (event) => this.hitSomething(event))
    }

    hitSomething(event) {
        if(event.other.owner instanceof Fish) {
            event.other.owner.kill() 
            
         this.scene.engine.addscore()   
           
       }
    
}
    onPostUpdate(engine) {
        let xspeed = 0;
        let yspeed = 0
        if (engine.input.keyboard.isHeld(Keys.Left)) {
          xspeed = -150;
        } 
        if (engine.input.keyboard.isHeld(Keys.Right)) {
          xspeed = 250;
        } 
        if (engine.input.keyboard.isHeld(Keys.Up)) {
            yspeed = -150;
          } 
          if (engine.input.keyboard.isHeld(Keys.Down)) {
            yspeed = 150;
          } 
        this.vel = new Vector(xspeed, yspeed);
    }

    sharkLeft(e) {
        e.target.pos = new Vector(-100, 225)
    }

    
}
