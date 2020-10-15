class ShootBall{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.ShootBall = Constraint.create(options)
        World.add(world,this.ShootBall)

    }

    attach(body){
        this.sling.bodyA = body
    }

    shoot(){
        this.sling.bodyA = null
    }

    display(){
        if(this.ShootBall.bodyA){
            var pointA = this.ShootBall.bodyA.position;
            var pointB = this.pointB;
        }
    }

}
