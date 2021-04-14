var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	var bgImg_options={
		isStatic: true
	}

	World.add(world,bgImg);

	World.add(world, fairy);
	World.add(world, star);

	var star_options =
  { 
     restitution: 1.0 
  }

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

	fairyBody = Bodies.circle(350 , 30 , 5 , {restitution:0.5, isStatic:true})
	World.add(world, fairyBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  Engine.update(engine);

  rectMode(CORNERS);
  //rect(bgImg.position.x, bgImg.position.y, 20,20);

  if (starBody.position.y>470){
	  starBody.setVelocity(0,0);
  }

  keyPressed();
  drawSprites();

}

function keyPressed() {
	//write code here

	if(keyDown(LEFT_ARROW)){
		fairy.x=fairy.x-5;
	}

	if(keyDown(RIGHT_ARROW)){
		fairy.x=fairy.x+5;
	}

	if(keyDown(DOWN_ARROW)){
		star.x=starBody.position.x;
		star.y=starBody.position.y;
		star.velocityY=5;
		
	}
}
