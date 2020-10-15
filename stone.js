class Stone{
    constructor(x,y,radius){
        var options={isStatic:false,density:1.2,friction:1}
        this.body=Bodies.circle(x,y,radius,options);
        this.image=loadImage("stone.png");
        this.x=x;
        this.y=y;
        this.radius=radius;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius*2,this.radius*2);
        pop();
    }
}