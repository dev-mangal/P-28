class Tree{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.treewidth=450;
        this.treeheight=500;
        this.thickness=10;
        this.Image=loadImage("tree.png");
        var options={isStatic:true}
        this.base=Bodies.rectangle(this.x,this.y,this.treewidth,this.thickness,options);
        this.right=Bodies.rectangle(this.x+this.treewidth/2,this.y-this.treeheight/2,this.thickness,this.treeheight,options);
        this.left=Bodies.rectangle(this.x-this.treewidth/2,this.y-this.treeheight/2,this.thickness,this.treeheight,options);
        World.add(world,this.base);
        World.add(world,this.left);
        World.add(world,this.right);
    }
    display(){
        var pos=this.base.position;
        imageMode(CENTER);
        image(this.Image,pos.x,400,this.treewidth,this.treeheight+100);
    }
}