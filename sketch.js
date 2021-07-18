const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerbase;
var player;
var playerbase
function setup() {
  canvas = createCanvas(1280,600);
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
computerbase = new Computerbase(1000,height -300,800,0);
playerbase = new Computerbase(200,height -300,800,0);
player = new Player(185,playerbase.body.position.y-153,500,180);
computerplayer = new Player(1005,computerbase.body.position.y-153,500,180);



 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
 
   computerbase.show()
playerbase.show();
player.show();
computerplayer.show();
   //display Player and computerplayer


}
