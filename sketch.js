var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  coinImg = loadAnimation("coin.png")
}

function setup(){
  createCanvas(400,400);
  
// Moving background
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 5;
  path.scale = 1.5;

  //creating boy running
  boy = createSprite(180,340,30,30);
  boy.scale = 0.1;
  boy.addAnimation("Boy Running",boyImg);

  coin = createSprite(200,180,30,30);
  coin.scale = 0.5;
  coin.addAnimation("coin",coinImg);
  coin.velocityY = -0.1

  leftBoundary = createSprite(0,0,100,800);
  leftBoundary.visible = false;

  rightBoundary=createSprite(410,0,100,800);
  rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  if(path.y > 400 ){
    path.y = height/2;
  }
  drawSprites();
}
