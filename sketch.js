
var bullet
var wall,thickness
var weight,speed

function setup() {
  createCanvas(800,800);
  speed=random(223,321)
  weight= random(30,50)
  thicknness=random(22,83)
 wall= createSprite(700, 200, 10, 200);
 wall.shapeColor="white"
 bullet=createSprite(10,200,50,10)
bullet.shapeColor="brown"
bullet.velocityX=speed
}

function draw() {
  background(0);
  if(wall.x-bullet.x<bullet.width/2+wall.width/2)  {
 bullet.velocityX=0
 var deformation=0.5*weight*speed*speed/(thickness*thickness*thickness)

if(deformation>10) {

  wall.shapeColor="red"
}
if(deformation<10)  {

  wall.shapeColor="green"
}


  }
  

  drawSprites();
}