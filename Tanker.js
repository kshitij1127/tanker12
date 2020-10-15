class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
     this.body = Bodies.rectangle(x,y,width,height,options)
     World.add(world,this.body)
    };

    display(){
      var position = this.body.position
      rect(this.x,this.y,width,height)
      rectMode(CENTER)
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look

    };
}
