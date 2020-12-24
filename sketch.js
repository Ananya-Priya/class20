
var fixed, moving; 
var car1, car2

function setup() {
   createCanvas(1200,600);
  fixed=createSprite(400,400,50,80);
  moving=createSprite(600,200,80,50);
  fixed.shapeColor="green";
  moving.shapeColor="green";

  car1=createSprite(200,200,50,50);
  car1.shapeColor="pink";
  car1.velocityX=2;

  car2=createSprite(1000,200,50,50);
  car2.shapeColor="yellow";
  car2.velocityX=-2;
 } 

 function draw() {
    background(0);
    moving.x=mouseX;
    moving.y=mouseY;
    console.log(moving.x-fixed.x);
   
    if(moving.x-fixed.x <= moving.width/2 + fixed.width/2 &&
    fixed.x- moving.x <= moving.width/2 + fixed.width/2 &&
    moving.y-fixed.y <= moving.height/2 + fixed.height/2 &&
    fixed.y- moving.y <= moving.height/2 + fixed.height/2 ) {
    fixed.shapeColor="red";
    moving.shapeColor="red"; 
    } 
    
    else {
    fixed.shapeColor="green"; 
    moving.shapeColor="green"; 
    }
    
    if(car1.x-car2.x <= car1.width/2 + car2.width/2 &&
      car2.x- car1.x <= car1.width/2 + car2.width/2 ){
      car1.velocityX = car1.velocityX* -1;
      car2.velocityX = car2.velocityX* -1;
      }
    drawSprites(); 
  }