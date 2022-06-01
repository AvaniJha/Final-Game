

var astroImg, astronaut, WinImg, YouWin;
var plank1, plank2, plank3, plank4, plank5, plank6, plank7, plank8, plank9, plank10, plank11, plank12, plank13,plank14,plank15,plank16, plank17, banner;
var lifeline1, lifeline2, lifeline3, heart;
var replay, restartImg;


var lifetime = 3, plankGroup, lifeGroup, score = 0;
var tokenImg, token1, token2, token3, token4,tokenGroup;
var gameState = 1, borderImg

function preload(){
astroImg = loadImage('astroSprite.png');
heart = loadImage('heartImg.png');
tokenImg = loadImage('magicc.png');
borderImg = loadImage('border.png');
WinImg = loadImage('winImg.png');
restartImg = loadImage('gameOverImg.png');
}

function setup() {
  createCanvas(1360,620);

  
  replay = createSprite(680,310,10,10);
  replay.addImage(restartImg);
  replay.scale = 0.4;
  replay.visible = false;

 
 astronaut = createSprite(1320,600)
  astronaut.addImage(astroImg);
  astronaut.scale = 0.04;
  astronaut.debug = true;

   
  banner = createSprite(1160,20,500,50);
  banner.visible= false;
  

  token1 = createSprite(1290,300,20,20);
  token1.addImage(tokenImg);
  token1.scale = 0.07

  token2 = createSprite(830,435,20,20);
  token2.addImage(tokenImg);
  token2.scale = 0.07

  token3 = createSprite(332,180,20,20);
  token3.addImage(tokenImg);
  token3.scale = 0.07

  token4 = createSprite(500,560,20,20);
  token4.addImage(tokenImg);
  token4.scale = 0.07

  lifeGroup = new Group();

  lifeline1 = createSprite(1330,20,10,10);
  lifeline1.addImage(heart);
  lifeline1.scale = 0.05

  lifeline2 = createSprite(1280,20,10,10);
  lifeline2.addImage(heart);
  lifeline2.scale = 0.05

  lifeline3 = createSprite(1230,20,10,10);
  lifeline3.addImage(heart);
  lifeline3.scale = 0.05

  lifeGroup.add(lifeline1);
  lifeGroup.add(lifeline2);
  lifeGroup.add(lifeline3);

  

  plankGroup = new Group();
  tokenGroup = new Group();


  plank1 = createSprite(1150,600,500,12);
  plank2 = createSprite(900,496,12,220);
  plank3 = createSprite(1280,480,420,12);
  plank4 = createSprite(1210,320,12,320);
  plank5 = createSprite(860,380,220,12);
  plank6 = createSprite(620,540,12,260);
  plank7 = createSprite(420,505,410,12);
  plank8 = createSprite(210,500,12,80);
  plank9 = createSprite(415,300,12,420);
  plank10 = createSprite(280,240,280,12);
  plank11 = createSprite(777,333,12,300);
  plank12 = createSprite(400,113,520,12);
  plank13 = createSprite(1075,250,320,12);
  plank14 = createSprite(230,455,220,12);
  plank15 = createSprite(146,298,12,120);
  plank16 = createSprite(534,210,12,200);
  plank17 = createSprite(570,250,80,12);


  plankGroup.add(plank1);
  plankGroup.add(plank2);
  plankGroup.add(plank3);
  plankGroup.add(plank4);
  plankGroup.add(plank5);
  plankGroup.add(plank6);
  plankGroup.add(plank7);
  plankGroup.add(plank8);
  plankGroup.add(plank9);
  plankGroup.add(plank10);
  plankGroup.add(plank11);
  plankGroup.add(plank12);
  plankGroup.add(plank13);
  plankGroup.add(plank14);
  plankGroup.add(plank15);
  plankGroup.add(plank16);
  plankGroup.add(plank17);

  tokenGroup.add(token1);
  tokenGroup.add(token2);
  tokenGroup.add(token3);
  tokenGroup.add(token4);
  
}

function draw() {
  background("#150147");

 


  text("x: "+mouseX+" y: "+mouseY, mouseX, mouseY);
 if(gameState === 3){
     if(mousePressedOver(replay)) {
    reset();
  }
}


if(gameState === 1){
  fill("lightGreen")
  textSize(20)
  text("Tokens collected = " +score+"/4", 980,30);
 
  

 if(lifetime>0){
  if(keyDown('UP_ARROW')){
    astronaut.y = astronaut.y - 5;
  }

  if(keyDown('DOWN_ARROW')){
    astronaut.y = astronaut.y + 5;
  }

  if(keyDown('LEFT_ARROW')){
    astronaut.x = astronaut.x - 5;
  }

  if(keyDown('RIGHT_ARROW')){
    astronaut.x = astronaut.x + 5;
  }
  }

  astronaut.collide(banner);

  plank1.visible= true;
  plank2.visible= true;
  plank3.visible= true;
  plank4.visible= true;
  plank5.visible= true;
  plank6.visible= true;
  plank7.visible= true;
  plank8.visible= true;
  plank9.visible= true;
  plank10.visible= true;
  plank11.visible= true;
  plank12.visible= true;
  plank13.visible= true;
  plank14.visible= true;
  plank15.visible= true;
  plank16.visible= true;
  plank17.visible= true;

  token1.visible = true;
  token2.visible = true;
  token3.visible = true;
  token4.visible = true;

  lifeline1.visible = true;
  lifeline2.visible = true;
  lifeline3.visible = true;

  astronaut.visible = true;

  replay.visible = false;
  

  

  if(plankGroup.isTouching(astronaut)){
    if(lifetime>0){
   checkLife();
  }
}


  astronaut.isTouching(tokenGroup,checkScore) 
    
  
  
  if(score === 4){
    SweetAlertDisplay();
  }
  
  
}


else if(gameState === 2){
  background("lightblue");

  if(score === 4){
    SweetAlertDisplay();
  }
  drawSprites();
  
}
drawSprites();
}


function checkLife(){
  lifetime-= 1

  if(lifetime === 2){
    // lifeline3.lifetime = 0;
    // lifeline3.remove();
    lifeline3.x = 1400;
    astronaut.x = 1310;
    astronaut.y = 550;
  }

  if(lifetime === 1){
    // lifeline2.lifetime = 0;
    // lifeline2.remove();
    lifeline2.x = 1400;
    astronaut.x = 1310;
    astronaut.y = 550;
  }

  if(lifetime=== 0){
    // lifeline1.lifetime = 0;
    // lifeline1.remove();
    lifeline1.x = 1400;
    astronaut.x = 1310;
    astronaut.y = 550;
gameOver();

  }
  


  
}

function checkScore(){

  if(astronaut.isTouching(token1)){
    token1.lifetime = 0;
    token1.remove();
    score=score+1;
  }

  if(astronaut.isTouching(token2)){
    token2.lifetime = 0;
    token2.remove()
    score=score+1;
  }

  if(astronaut.isTouching(token3)){
    token3.lifetime = 0;
    token3.remove()
    score=score+1;
  }

  if(astronaut.isTouching(token4)){
   token4.lifetime = 0;
    token4.remove()
    score=score+1;
  }
}

function SweetAlertDisplay(){
  gameState = 2;

  plank1.visible= false;
  plank2.visible= false;
  plank3.visible= false;
  plank4.visible= false;
  plank5.visible= false;
  plank6.visible= false;
  plank7.visible= false;
  plank8.visible= false;
  plank9.visible= false;
  plank10.visible= false;
  plank11.visible= false;
  plank12.visible= false;
  plank13.visible= false;
  plank14.visible= false;
  plank15.visible= false;
  plank16.visible= false;
  plank17.visible= false;

  astronaut.visible = false;
  

 YouWin = createSprite(680,310,10,10);
 YouWin.addImage( WinImg);
 YouWin.scale = 0.4

 fill("lightGreen")
  textSize(20)
  text("Tokens collected = " +"4/4", 980,30);




}

function gameOver(){

  gameState = 3;

  replay.visible = true;


  plank1.visible= false;
  plank2.visible= false;
  plank3.visible= false;
  plank4.visible= false;
  plank5.visible= false;
  plank6.visible= false;
  plank7.visible= false;
  plank8.visible= false;
  plank9.visible= false;
  plank10.visible= false;
  plank11.visible= false;
  plank12.visible= false;
  plank13.visible= false;
  plank14.visible= false;
  plank15.visible= false;
  plank16.visible= false;
  plank17.visible= false;

  token1.visible = false;
  token2.visible = false;
  token3.visible = false;
  token4.visible = false; 

  astronaut.visible = false;
  

}

function reset(){

gameState = 1;

astronaut.x = 1310;
astronaut.y = 550;

score = 0;
lifetime = 3;

lifeline1.x = 1330
lifeline2.x = 1280
lifeline3.x = 1230


}

