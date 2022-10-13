function setup() {
  createCanvas(800,400);

bg = createSprite(0,200,3000,300)
bg.addImage(bg_image)
  plr = createSprite(400, 200, 50, 50);
  plr.addAnimation("idle", plr_idle)
  plr.scale = 0.3
plr.debug = true
plr.setCollider("rectangle", 50,0, 200,430)
  ground = createSprite(2500,380,5000,10)
  // ground.visible = false

}

function preload(){
  plr_idle = loadAnimation("png/idle2.png")
  bg_image = loadImage("bg.jpg")
}

function draw() {
  background(0); 

  drawSprites();
  plr.collide(ground)


  camera.x=plr.x;
  camera.y=plr.y;
  if(keyDown("space")){
plr.velocityY = -12
  }
  plr.velocityY+= 0.8

if(keyDown(RIGHT_ARROW)){
plr.x+=5
}

// if(plr.x-cactus.x>200) cactus.x=plr.x+200;
//   if(cactus.x-plr.x>200) cactus.x=plr.x-200;

}