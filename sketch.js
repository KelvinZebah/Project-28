
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var tree,treeimg;
var ground;
var boy,boyimg;
var mango1,mango2,mango3,mango4,mango5;
var throwm;
var stone;

function preload(){
	treeimg = loadImage("tree.png");
	boyimg = loadImage("boy.png");
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = createSprite(1200,350);
	tree.addImage(treeimg);
	tree.scale=0.6;

	boy = createSprite(200,560);
	boy.addImage(boyimg);
	boy.scale=0.17;

	ground = new Ground(400,700,2500,30);

	mango1 = new Mango(1200,500,20);
	mango2 = new Mango(1300,450,25);
	mango3 = new Mango(1250,550,20);
	mango4 = new Mango(1220,600,20);
	mango5 = new Mango(1290,550,20);

	stone = new Stone(200,560,20);

	//throwm = new Throw(stone,{x:200,y:560});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  stone.display();
  
  drawSprites();
 
}



