var man,manimg,corona,coronaimg,mask,maskimg,house,houseimg,san,sanimg

function preload(){
 manimg=loadImage("mario running.png")
 coronaimg=loadImage("corona.png")
 maskimg=loadImage("mask.jpg")
 houseimg=loadImage("house.jpg")
 sanimg=loadImage("sanitizer.jpg")
}












function setup() {
  createCanvas(800,400);
   man=createSprite(200,50,50,50)
  man.addImage(manimg)
  man.scale=0.05
  corona=createSprite(100,50,50,50)
  corona.addImage(coronaimg)
  corona.scale=0.2
  house=createSprite(700,350,50,50)
  house.addImage(houseimg)
  house.scale=0.5
  maze1=createSprite(10,10,500,10)
  maze2=createSprite(10,100,500,10)
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
}