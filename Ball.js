class Ball {
  constructor(x,y,radius) {
    var options ={
        frictionAir: 0,
        friction: 0,
        frictionStatic: 1,
        inertia: Infinity,
        restitution: 1.0
    }
    this.body = Bodies.circle(x,y,radius)
    World.add(world,this.body)
  }

  display() {
var position = this.body.position
var angle = this.body.angle
  }
}
