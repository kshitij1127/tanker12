class Ground {
  constructor(x, y, width, height) {
    var options ={
      isStatic : true
    }
    this.body = Bodies.rectangle(x,y,width,height,options)
    World.add(world,this.body)
  };

  display(){
    var position = this.body.position
    rect(0,0,this.x,this.y)
    rectMode(CENTER)
  }
}
