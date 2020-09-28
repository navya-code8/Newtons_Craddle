class Bob{

    constructor(x,y){
        
        this.body = Bodies.circle(x,y,50,  {isStatic: false, restitution:0.3, friction: 0.5, density: 1.2});
        this.diameter = 50;
        this.color = "pink";
        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill(this.color)
        ellipse(pos.x, pos.y, 70, 70);

    }
}