class CanonBall {
  constructor(x, y) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
    }
    this.r = 15
    this.body = Bodies.circle(x,y,this.r,options)
    World.add(world,this.body)
  };

  display(){
    var position = this.body.position
    push()
    ellipse(0,0,this.r)
    ellipseMode(CENTER)
    pop()
  };
};
