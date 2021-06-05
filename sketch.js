/* var fixedRect;
var movingRect;

var gameObject1;
var gameObject2;

function setup() {
  createCanvas(800,400);
 movingRect = createSprite(400, 200, 50, 50);
 movingRect.shapeColor = "green";
 movingRect.debug = true;

 fixedRect = createSprite(200,200,50,50);
 fixedRect.shapeColor = "green";
 fixedRect.debug = true;

 gameObject1 = createSprite(50,100,50,50);
gameObject1.shapeColor = "green";

 gameObject2 = createSprite(120,100,50,50);
gameObject2.shapeColor = "green";

 
}

function draw() {
  background(0);  

  movingRect.x = World.mouseX ;
  movingRect.y = World.mouseY ;

  if (isCollided(movingRect,gameObject1)){
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red";
  } else {
    fixedRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }

  drawSprites();
}

function isCollided(m,f){
  if (m.x - f.x < f.width/2 + m.width/2
    && f.x - m.x < f.width/2 + m.width/2
    && m.y - f.y < f.height/2 + m.height/2
    && f.y - m.y < f.height/2 + m.height/2){
      return true;
    }
else {
  return false;
}

}*/

var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,fixedRect);
  
  drawSprites();
}

