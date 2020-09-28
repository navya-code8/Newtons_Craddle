class Rope{

    constructor(body1, body2, offsetX, offsetY){

        var options = {
            bodyA: body1,
            bodyB:body2,
            pointB: {x: 70*2, y: 0 },
            stifness: 0.08,
            length: 10
        }

        this.rope = Constraint.create(options);

        World.add(world,this.rope);
         
    }

    display(){

        var posA = this.rope.bodyA.position;
        var posB =  this.rope.bodyB.position;
        strokeWeight(2);
        line(posA.x, posA.y, posA.x, posB.y)

    }




}