const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
//var canvas;
var tree;
var stone;

var boy;
var boy_img;

var mango1, mango2, mango3, mango4, mago5, mango6;

//var chain;
//var options;

function preload(){
boy_img = loadImage("images/boy.png");
}

function setup() {
 createCanvas(1200,400);

  engine = Engine.create();
	world = engine.world;

  ground = new Ground(600,height,1200,20);

  tree = new TreeClass(1000,200,10,100)

  stone = new StoneClass(120,100,10);

  mango1 = new MangoClass(1000,150,50);
  mango2 = new MangoClass(1090,150,50);
  mango3 = new MangoClass(910,150,50);
  mango4 = new MangoClass(1000,100,50);
  mango5 = new MangoClass(910,100,50);
  mango6 = new MangoClass(1090,100,50);

  boy = createSprite(100,320,150,250);
  boy.addImage(boy_img);
  boy.scale = 0.1;

  //sling = Constraint.create()

  var options = {
    bodyA: boy.body,
    bodyB: stone.body,
    stiffness: 0.04,
    length: 10
  }
  var chain = Constraint.create(options);
  World.add(world,chain);
  
  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);  

  Engine.update(engine);

  
  ground.display();
  tree.display();
  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  drawSprites();
}