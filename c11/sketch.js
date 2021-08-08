var path,path_Img ;
var runner,runner_Img;
var invisibleleft;
var invisibleright;
function preload()
{ 
  //pre-load image
  path_Img = loadImage("path.png");
  runner_Img = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup()
{
  createCanvas(400,400);
  //create sprites here
 path = createSprite (200,200);
 path.addImage ("moveing",path_Img);
 path.velocityY = 4;
 path.scale=1.2;
 runner = createSprite(200,275,20,50);
 runner.addAnimation("running",runner_Img);
 runner.scale = 0.1
 invisibleleft = createSprite(150,200,10,400);
  invisibleleft.visible=false
 invisibleright = createSprite(270,200,10,400);
  invisibleright.visible=false

}

function draw()
{
  background(0);
  runner.x=mouseX
  if(path.y > 400 )
  {
    path.y = height/2;
  }
 runner.collide(invisibleleft)
 runner.collide(invisibleright)
  drawSprites();
}
