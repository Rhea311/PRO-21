var canvas;
var music, music_1;
var yellow, blue,pink,green;
var ball;
var wall1,wall2,wall3;
function preload(){
    music_1 = loadSound("music.mp3");
}


function setup(){
 createCanvas(700,600);

    //create 4 different surfaces
    yellow = createSprite(80,590,150,20)
    yellow.shapeColor = "yellow"

    blue = createSprite(260,590,150,20)
    blue.shapeColor = "blue"

    pink = createSprite(440,590,150,20)
    pink.shapeColor = "pink"

    green = createSprite(620,590,150,20)
    green.shapeColor = "green"

    wall1 = createSprite(5,30,10,1500)
    wall1.shapeColor = "red"
    wall1.visible = false;

    wall2 = createSprite(5,5,1500,10)
    wall2.shapeColor = "red"
    wall2.visible = false;

    wall3 = createSprite(695,30,10,1500)
    wall3.shapeColor = "red"
    wall3.visible = false;

    wall4 = createSprite(595,595,1500,10)
    wall4.shapeColor = "red"
    wall4.visible = false;


    //create box sprite and give velocity
    ball = createSprite(100,80,20,20)
    ball.shapeColor = "white"
    ball.velocityX = 7;
    ball.velocityY = 7;

}

function draw() {
    background("grey");
   
   if(ball.isTouching(wall1) && ball.bounceOff(wall1)){
     ball.shapeColor = "white"
   }

   if(ball.isTouching(wall2) && ball.bounceOff(wall2)){
    ball.shapeColor = "white"
  }

  if(ball.isTouching(wall3) && ball.bounceOff(wall3)){
    ball.shapeColor = "white"
  }

  if(ball.isTouching(wall4) && ball.bounceOff(wall4)){
    ball.shapeColor = "white"
  }

  if(ball.isTouching(green) && ball.bounceOff(green)){
    ball.shapeColor = "green"
  }

  if(ball.isTouching(yellow) && ball.bounceOff(yellow)){
    ball.shapeColor = "yellow"
  }
   
  if(ball.isTouching(pink) && ball.bounceOff(pink)){
    ball.shapeColor = "pink"
    music_1.play();
  }

  if(ball.isTouching(blue)){
    ball.shapeColor = "blue"
    ball.velocityX = 0;
    ball.velocityY = 0;
    music_1.stop();
  }


    drawSprites();
}

