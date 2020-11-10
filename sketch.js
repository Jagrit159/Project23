var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var rectangle, rectangle2, rectangle3;
var rectBody,rectBody2,rectBody3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	rectangle = createSprite(462,610,20,100);
	rectangle2 = createSprite(270,610,20,100);
	rectangle3 = createSprite(372,650,200,20);

	rectangle.shapeColor = "red"
	rectangle2.shapeColor = "red"
	rectangle3.shapeColor = "red"
	
	engine = Engine.create();
	world = engine.world;
	
	rectBody = Bodies.rectangle(462,610,20,100, {isStatic:true});
	rectBody2 = Bodies.rectangle(270,610,20,100,{isStatic:true});
	rectBody3 = Bodies.rectangle(372,635,200,20, {isStatic:true});
	World.add(world, rectBody);
	World.add(world, rectBody2);
	World.add(world, rectBody3);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  fill("red");
  rect(rectBody.position.x,rectBody.position.y,20,100);
  rect(rectBody2.position.x,rectBody2.position.y,20,100);
  rect(rectBody3.position.x,rectBody3.position.y,200,20);
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

	Matter.Body.setStatic(packageBody ,false);
	
	packageSprite.x = packageBody.position.x
	packageSprite.y = packageBody.position.y
    }
}