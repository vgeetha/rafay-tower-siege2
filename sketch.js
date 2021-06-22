
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var apple1,apple2,apple3,apple4,apple5,apple6,apple7,apple8,apple9,apple10,apple11,apple12;
var world,boy;
var launchingForce=100;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new stone(235,420,30); 

	apple1=new apple(1100,100,30);
  apple2=new apple(1170,130,30);
	apple3=new apple(1010,140,30);
	apple4=new apple(1000,70,30);
	apple5=new apple(1100,70,30);
	apple6=new apple(1000,230,30);
	apple7=new apple(900,230,40);
	apple8=new apple(1140,150,40);
	apple9=new apple(1100,230,40);
	apple10=new apple(1200,200,40);
  apple11=new apple(1120,50,40);
	apple12=new apple(900,160,40);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	launcherObject=new launcher(stoneObj.body,{x:220,y:315})
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });
	
	Engine.run(engine);
 // Render.run(render);
}

function draw() {

  background("cyan");
  //frameRate(2)
 // Engine.update(engine)
textSize(25);
 text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,290,200,300);
  //Engine.update(engine)
  

  treeObj.display();
  stoneObj.display();
  apple1.display();
  apple2.display();
  apple3.display();
  apple4.display();
  apple6.display();
  apple7.display();
  apple8.display();
  apple9.display();
  apple10.display();
  apple11.display();
  apple12.display();
  stoneObj.display();

  groundObject.display();
  launcherObject.display();
  detectollision(stoneObj,apple1);
  detectollision(stoneObj,apple2);
  detectollision(stoneObj,apple3);
  detectollision(stoneObj,apple4);
  detectollision(stoneObj,apple5);
  detectollision(stoneObj,apple6);
  detectollision(stoneObj,apple7);
  detectollision(stoneObj,apple8);
  detectollision(stoneObj,apple9);
  detectollision(stoneObj,apple10);
  detectollision(stoneObj,apple11);
  detectollision(stoneObj,apple12);
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	 launcherObject.attach(stoneObj.body);
	}
}

  function detectollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }