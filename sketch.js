const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,platform;
var barcoimg,barco;
var cañonimg,cañon;
var pirataimg,pirata;
var ballimg,ball;

function preload() {
backgroundImg = loadImage("fondo1.1.png");
barcoimg = loadImage("barco1.1.png");
cañonimg = loadImage("cañon1.1.png");
pirataimg = loadImage("pirata1.1.png");
//ballimg = loadImage("Cannon_Ball.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

        barco = createSprite(1100,150);
        barco.addImage(barcoimg);
        barco.scale = 0.3;
        barco.velocityX = -3;
     barco.lifetime = 370;
  
    ball = new Ball(600,200);
    
   cañon = createSprite(600,375);
   cañon.addImage(cañonimg);
   cañon.scale = 0.2;

   pirata = createSprite(500,375);
   pirata.addImage(pirataimg);
   pirata.scale = 0.2;
}

function draw(){
    background("light_blue");
        background(backgroundImg);
     
       
    ball.display();
    Engine.update(engine);
    drawSprites();
      
}
function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleassed(){
cañon.fly();
}