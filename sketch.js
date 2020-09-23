
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var box1 , box2 , box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,650,800,20);

	ball = new Paper (100,40,40);

	box1 = new Dustbin(450,615,20,50);
  box2 = new Dustbin(350,630,200,20);
	box3 = new Dustbin(250,615,20,50);


	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  
  background(0);
  
  ball.display();

  
  ground.display();
  box1.display();
  box2.display();
  box3.display();

  drawSprites();
 
}

 function keyPressed (){
	 if (keyCode === (UP_ARROW))
	 Matter.Body.applyForce(ball.body,ball.position,{x:150,y:-150})
 }



