const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var base, rightWall, leftWall;
var btN1;


function preload()
{
	
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 var ball_options = {
    restitution:1,
	friction:0,
	density:0.85,
 }
	ball = Bodies.circle(windowWidth/3.5, windowHeight/1.2,15,ball_options);
	World.add(world,ball)

	base = new Box(windowWidth/2, windowHeight/1.035, width,10)
    rightWall = new Box(windowWidth/1.7, windowHeight/1.13, 10,100)
	leftWall = new Box(windowWidth/1.3, windowHeight/1.22, 10,200)

	btN1 = createImg("push.png");
	btN1.position(windowWidth/3, windowHeight/4);
	btN1.size (50,50);

	btN1.mouseClicked (hForce);


	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);

  background("skyBlue");
  
  ellipse(ball.position.x, ball.position.y,15);
    stroke("black"),
    fill("white"),
	push()
  base.show ()
  rightWall.show ()
  leftWall.show ()


  drawSprites();
}

function hForce () {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-10});
  Matter.Body.applyForce(ball,{x:0,y:0},{x:7.5,y:0});
}