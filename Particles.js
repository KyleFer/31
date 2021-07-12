class Particles {
    constructor(x, y,r) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:false
        }
        this.body = Bodies.circle(x,y,this.r,options)
        
        World.add(world,this.body)
    }
   
   display(){
this.color=color(random(0,225),random(0,225),random(0,225))
 }
}