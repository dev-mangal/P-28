class Mango{
    constructor(x,y,radius){
        var options={isStatic:true}
        this.body=Bodies.circle(x,y,radius,options);
        this.image=loadImage("mango.png");
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