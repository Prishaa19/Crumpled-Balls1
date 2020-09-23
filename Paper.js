class Paper {
    constructor(x, y, radius) {
        var options = {
            'isStatic' : false,
            'restitution':0.8,
            'friction':0.5,
            'density':1.2
        }
        this.body=Bodies.circle(x, y, radius ,options);
        //this.width = width;
        //this.height = height;
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
        //var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("pink");
        ellipse(0,0,this.radius,this.radius);
        //rotate(angle);
        //imageMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}