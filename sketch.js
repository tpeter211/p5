let positionX;
let speedX;
let positionY;
let speedY;
let jordanImage;
let jordanpositionX;
let jordanpositionY;
let jordanspeedX;
let jordanspeedY;

function preload(){
  jordanImage=loadImage('images/jordan.jpg');
}

function setup() {
  // put setup code here
  createCanvas(1200,800);
  background(124, 194, 157);
  positionX=300;
  speedX=1;
  positionY=200;
  speedY=5;
  jordanpositionX=200;
  jordanpositionY=200;
  jordanspeedX=5;
  jordanspeedY=5;
}


function draw() {

fill(245,0,0);
image(jordanImage,positionX,positionY,300,300);

positionX = positionX + speedX; //update positionX value
//bounce on x-axis
if(positionX>=1000 || positionX <= 0) {
  speedX = speedX * -1;
}

positionY = positionY + speedY; //update positionY value
//bounce on Y-axis
if(positionY>=500 || positionY <=0){
  speedY= speedY * -1;
}

{
ellipse(mouseX, mouseY, 150,150);
}


fill(0,0);


for(let i=20; i<1200; i+=20){

  for(let j=20; j<1200; j+=20)
rect(i,j,10,10);
}

}

function keyPressed(){
  background(150,0,0);
}
