var ship,shipimage;
var backgroundimage;
function preload(){
shipimage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
backgroundimage=loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  bg=createSprite(200,200,400,400)
  bg.addImage(backgroundimage)
  bg.scale=0.25
  bg.velocityX=-2
  ship=createSprite(100,200,10,10)
  ship.addAnimation("ship",shipimage)
  ship.scale=0.1

  
  
}

function draw() {
  background("blue");
  if (bg.x<0) {
    bg.x=200 
   }
 drawSprites()
}