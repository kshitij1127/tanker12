// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
var gameState = "launched"
// The above line creates different constant variables for Engine, World, Bodies etc.

var tanker1,shootingball , bubbleballs 


/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/
var engine , world 

function setup() {
    engine = Engine.create()
    world = engine.world 
    canvas = createCanvas(400,400)
    tanker1 = new Tanker(100,150,50,50)
    shootingball = new ShootBall(tanker1.body,{x : 200,y : 50})
    
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.

}
function keyReleased() {
    // Call the shoot method for the cannon.
   
        slingshot.fly();
        gameState = "launched";
   
        cannonball = new CanonBall(tanker1.x,tanker1.y)  
        cannonball.display()  
}

function draw() {
    Engine.update(engine)
    tanker1.display();
    shootingball.display();
    if (gameState!=="launched"){
        Matter.Body.setPosition(tanker1.body, {x: mouseX , y: mouseY});
    }

// Remember to update the Matter Engine and set the background.
}


