var snowimg,snowimg1,snowimg2,snow1,snow2
var snow,snowflake
function preload(){
  snow=loadImage("snow4.webp")
  snowimg=loadImage("snow1.jpg")
  snowimg1=loadImage("snow2.jpg")
}
  

function setup(){


  createCanvas(800,400);
  
 //snow1= createSprite(400, 200, 50, 50);
}

function draw() {
  background(snowimg1);  
  createsnowflake();
  drawSprites();
}
function createsnowflake(){
  if(frameCount%10===0){
snowflake=createSprite(random(0,800),0,50,50)
snowflake.velocityX=-2
snowflake.velocityY=4
snowflake.addImage(snow)
snowflake.scale=0.1
  }
}