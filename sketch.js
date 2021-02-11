var robber;
var security1,security2,security3;
var jewel,jewel1,jewel2,jewel3;
var laser,laser1,laser2,laser3,laser4,laser5,laser6,laser7i,laser7,laser8,laser9,laser10,laser11,laser12;
var atomBomb,atomBomb1,atomBomb2;
var thief1;
var gameState=0;



function preload(){
  thief1=loadImage("thiefRemoved.png");
  laser=loadImage("laserBeam.png");
  jewel1=loadImage("jewel.png");
  laser7i=loadImage("laserVert.png");
  atomBomb=loadImage("bullet.png");
}

function setup() {
  createCanvas(1500,925);
  
   robber=createSprite(100, 800, 50, 50);
   laser1=createSprite(400,700,900,30);
   laser2=createSprite(800,500,900,30);
   laser3=createSprite(1200,300,900,30);
   laser4=createSprite(600,600,900,30);
   laser5=createSprite(1000,400,900,30);
   
   jewel=createSprite(1400,200,50,50);
   
   


   robber.shapeColor=("black");
   laser1.shapeColor=("red");
   laser2.shapeColor=("red");
   laser3.shapeColor=("red");


  robber.addImage(thief1);
  laser1.addImage(laser);
  laser2.addImage(laser);
  laser3.addImage(laser);
  laser4.addImage(laser);
  laser5.addImage(laser);
  jewel.addImage(jewel1);
  

  laser1.scale=0.65;
  laser2.scale=0.65;
  laser3.scale=0.65;
  laser4.scale=0.65;
  laser5.scale=0.65;
  jewel.scale=0.65;
  
  
  robber.scale=0.25;

  laser1.debug=true;

  laser1.setCollider("circle",20,0,30);

  laser2.debug=true;

  laser2.setCollider("circle",20,0,30);

  laser3.debug=true;

  laser3.setCollider("circle",20,0,30);

  
  laser4.debug=true;

  laser4.setCollider("circle",20,0,30);

  laser5.debug=true;

  laser5.setCollider("circle",20,0,30);

  edges = createEdgeSprites();

  laser1.velocityX=10;
  laser2.velocityX=11;
  laser3.velocityX=12;
  laser4.velocityX=13;
  laser5.velocityX=14;

  
}
function draw(){
  background("yellow")
  drawSprites();
}
