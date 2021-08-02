var bgi,Sleepi,Movei,Brushi,Gymi,Drinki,Eati
var edges
function preload(){
  bgi= loadImage("iss.png");
  Sleepi= loadAnimation("sleep.png");
  Brushi= loadAnimation("brush.png");
  Gymi= loadAnimation("gym1.png","gym2.png");
  Eati= loadAnimation("eat1.png","eat2.png");
  Drinki= loadAnimation("drink1.png","drink2.png");
  Movei= loadAnimation("move.png","move1.png");
}
function setup() {
  createCanvas(800,540);
  background1= createSprite(400,270);
  background1.addImage("bg",bgi);
  background1.scale=0.16
  astronaut= createSprite(400, 270, 50, 50);
 astronaut.addAnimation("sleeping", Sleepi);
 astronaut.scale=0.1
  edges=createEdgeSprites()
}


function draw() {
  background(100);  
  drawSprites();
  fill(240)
  textSize(25)
 text("Instructions",100,70)
 textSize(20)
 text("Up Arrow = Brushing",100,100)
 text("Down Arrow = Running",100,130)
 text("Left Arrow = Eating",100,160)
 text("Right Arrow = Drinking",100,190)
 text("m key = go home",100,310)
astronaut.collide(edges)
 if(keyDown(UP_ARROW)){
   astronaut.addAnimation("Brushing", Brushi)
   astronaut.changeAnimation("Brushing")
   astronaut.velocityX=0
   astronaut.velocityY=0
 }
 if(keyDown(DOWN_ARROW)){
  astronaut.addAnimation("Gyming", Gymi)
  astronaut.changeAnimation("Gyming")
  astronaut.velocityX=0
  astronaut.velocityY=0
 }
 if(keyDown(LEFT_ARROW)){
  astronaut.addAnimation("Eating", Eati)
  astronaut.changeAnimation("Eating")
  astronaut.velocityX=0
  astronaut.velocityY=0
 }
 if(keyDown(RIGHT_ARROW)){
  astronaut.addAnimation("Drinking", Drinki)
  astronaut.changeAnimation("Drinking")
  astronaut.velocityX=0
  astronaut.velocityY=0
 }
 if(keyDown("M")){
  astronaut.addAnimation("moveing", Movei);
  astronaut.changeAnimation("moveing");
  astronaut.velocityX=0
  astronaut.velocityY=0
 }

}