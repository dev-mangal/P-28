var boy,boyimg,tree,mango1,mango2,mango3,mango4,mango5,mango6,mango7,stone,launcher,ground,engine,world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	boyimg=loadImage("boy.png");
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(600,680,1200,40);
	tree=new Tree(900,670);
	mango1=new Mango(770,330,20);
	mango2=new Mango(840,265,10);
	mango3=new Mango(890,290,15);
	mango4=new Mango(810,225,30);
	mango5=new Mango(990,300,25);
	mango6=new Mango(945,175,20);
	mango7=new Mango(950,250,20);
  stone=new Stone(200,200,30);
  launcher=new Launcher(boy,{x:165,y:565});
  boy=createSprite(220,600,0.5,0.5);
  boy.scale=0.1;
  boy.addImage(boyimg);
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(240);
  fill(0);
  text(mouseX+","+mouseY,1100,600);
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone.display();
  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
  detectcollision(stone,mango7);
  drawSprites();
}

function detectcollision(stoneb,mangob){
	mangopos=mangob.body.position;
	stonepos=stoneb.body.position;
	var distance=dist(stonepos.x,stonepos.y,mangopos.x,mangopos.y);
	if(distance<=mangob.radius+stoneb.radius){
		Matter.Body.setStatic(mangob.body,false);
	}
}

