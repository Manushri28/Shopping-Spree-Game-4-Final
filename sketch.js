var runner;
var shop1,shop2,shop3,shop4,shop5,shop6,shop7,shop8,shop9,shop10,shop11,shop12;
var y;
var item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,item11,item12;
var item1IMG, item2IMG, item3IMG;
var houseDesk;
var gameState = 0;
var stockItem1;
var timer;
var counter = 0;
var timeleft = 180;
var min, sec;
var timeOutSound;
var shop1IMG, shop2IMG, shop3IMG, shop4IMG, shop5IMG, shop6IMG, shop7IMG, shop8IMG, shop9IMG;
var dinnerTable;
var barLine;
var score = 0;
var tick;
var bg2Score;
var interval;


function preload() {
    
  bg = loadImage("images/bg.png");
  // bg2 = loadImage("images/bg2.png");

  timeOutSound = loadSound("sounds/checkPoint.mp3");
  tick = loadSound("sounds/Tick.mp3");

  dinnerTable = loadImage("images/houseTable.jpg");

  runnerIMG = loadImage("images/girl.jpg");

  shop1IMG = loadImage("shopImages/shop1IMG.png")
  shop2IMG = loadImage("shopImages/shop2IMG.png")
  shop3IMG = loadImage("shopImages/shop3IMG.png")
  shop4IMG = loadImage("shopImages/shop4IMG.png")
  shop5IMG = loadImage("shopImages/shop5IMG.png")
  shop6IMG = loadImage("shopImages/shop6IMG.png")
  shop7IMG = loadImage("shopImages/shop7IMG.png")
  shop8IMG = loadImage("shopImages/shop8IMG.png")
  shop9IMG = loadImage("shopImages/shop9IMG.png")

  item1IMG = loadImage("images/pizza.jpg")
  item2IMG = loadImage("images/biscuits.jpg")
  item3IMG = loadImage("images/burger.jpg")
  item4IMG = loadImage("images/candyFloss.png")
  item5IMG = loadImage("images/choco.png")
  item6IMG = loadImage("images/chocoCake.jpg")
  item7IMG = loadImage("images/donought.jpg")
  item8IMG = loadImage("images/fries.png")
  item9IMG = loadImage("images/iceCream.png")
  item10IMG = loadImage("images/macaroons.jpg")
  item11IMG = loadImage("images/marshmallows.png")
  item12IMG = loadImage("images/strawberry.jpg")


}

function convertSeconds(s){
  min = floor(s / 60);
  sec = s % 60;
  return nf( min, 2) + ' : ' + nf( sec, 2)
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  
  timer = select('#timer');
  timer.html(convertSeconds(timeleft - counter));

  interval = setInterval(timeIt, 1000)

  function timeIt(){
     counter++;
     tick.play();

     timer.html(convertSeconds(timeleft - counter));
     if(counter === timeleft){
      timeOutSound.play();
      counter = 0;
      clearInterval(interval);
     }
  }


  // bg2Score = createSprite(0, displayWidth, displayWidth*3, displayHeight*3);
  // bg2Score.addImage(bg2);
  // bg2Score.visible = false;

  houseDesk = createSprite(displayWidth/2, displayHeight*1, displayWidth-200, 200);
  houseDesk.shapeColor = "orange"
  houseDesk.addImage(dinnerTable)
  houseDesk.scale = 2

  //STOCK ITEMS
  stockItem1 = createSprite(houseDesk.position.x - 40, houseDesk.position.y + 290, 35, 35);
  stockItem1.shapeColor = "green"
  stockItem1.addImage(item1IMG);
  stockItem1.scale = 0.3
  stockItem1.visible = false;

  stockItem2 = createSprite(houseDesk.position.x - 140, houseDesk.position.y + 290, 35, 35);
  stockItem2.shapeColor = "green"
  stockItem2.addImage(item2IMG);
  stockItem2.scale = 0.4
  stockItem2.visible = false;

  stockItem3 = createSprite(houseDesk.position.x + 70, houseDesk.position.y + 290, 35, 35);
  stockItem3.shapeColor = "green"
  stockItem3.addImage(item3IMG);
  stockItem3.scale = 0.4
  stockItem3.visible = false;

  stockItem4 = createSprite(houseDesk.position.x + 180, houseDesk.position.y + 290, 35, 35);
  stockItem4.shapeColor = "green"
  stockItem4.addImage(item4IMG);
  stockItem4.scale = 0.3
  stockItem4.visible = false;

  stockItem5 = createSprite(houseDesk.position.x - 260, houseDesk.position.y + 290, 35, 35);
  stockItem5.shapeColor = "green"
  stockItem5.addImage(item5IMG);
  stockItem5.scale = 0.13
  stockItem5.visible = false;

  stockItem6 = createSprite(houseDesk.position.x + 280, houseDesk.position.y + 290, 35, 35);
  stockItem6.shapeColor = "green"
  stockItem6.addImage(item6IMG);
  stockItem6.scale = 0.32
  stockItem6.visible = false;

  stockItem7 = createSprite(houseDesk.position.x - 360, houseDesk.position.y + 290, 35, 35);
  stockItem7.shapeColor = "green"
  stockItem7.addImage(item7IMG);
  stockItem7.scale = 0.4
  stockItem7.visible = false;

  stockItem8 = createSprite(houseDesk.position.x + 390, houseDesk.position.y + 290, 35, 35);
  stockItem8.shapeColor = "green"
  stockItem8.addImage(item8IMG);
  stockItem8.scale = 0.4
  stockItem8.visible = false;

  stockItem9 = createSprite(houseDesk.position.x - 460, houseDesk.position.y + 290, 35, 35);
  stockItem9.shapeColor = "green"
  stockItem9.addImage(item9IMG);
  stockItem9.scale = 0.1
  stockItem9.visible = false;

  stockItem10 = createSprite(houseDesk.position.x + 490, houseDesk.position.y + 290, 35, 35);
  stockItem10.shapeColor = "green"
  stockItem10.addImage(item10IMG);
  stockItem10.scale = 0.35
  stockItem10.visible = false;

  stockItem11 = createSprite(houseDesk.position.x - 560, houseDesk.position.y + 290, 35, 35);
  stockItem11.shapeColor = "green"
  stockItem11.addImage(item11IMG);
  stockItem11.scale = 0.3
  stockItem11.visible = false;

  stockItem12 = createSprite(houseDesk.position.x + 590, houseDesk.position.y + 290, 35, 35);
  stockItem12.shapeColor = "green"
  stockItem12.addImage(item12IMG);
  stockItem12.scale = 0.3
  stockItem12.visible = false;

  //SHOPS  
  shop1 = createSprite(displayWidth/2 + 550, displayHeight*5 - 450, 110, 110);
  shop1.addImage(shop7IMG);
  shop1.scale = 0.7

  shop2 = createSprite(displayWidth/2, displayHeight*5 - 550, 110, 110);
  shop2.addImage(shop2IMG);
  shop2.scale = 0.7

  shop3 = createSprite(displayWidth/2 - 550, displayHeight*5 - 650, 110, 110);
  shop3.addImage(shop3IMG);
  shop3.scale = 0.7

  shop4 = createSprite(displayWidth/2 + 550, displayHeight*5 - 1100, 110, 110);
  shop4.addImage(shop4IMG);
  shop4.scale = 0.7

  shop5 = createSprite(displayWidth/2 - 150, displayHeight*5 - 910, 110, 110);
  shop5.addImage(shop5IMG);
  shop5.scale = 0.7

  shop6 = createSprite(displayWidth/2 - 550, displayHeight*5 - 1200, 110, 110);
  shop6.addImage(shop9IMG);
  shop6.scale = 0.7

  shop7 = createSprite(displayWidth/2 + 550, displayHeight*5 - 1600, 110, 110);
  shop7.addImage(shop1IMG);
  shop7.scale = 0.7

  shop8 = createSprite(displayWidth/2 , displayHeight*5 - 1350, 110, 110);
  shop8.addImage(shop8IMG);
  shop8.scale = 0.7

  shop9 = createSprite(displayWidth/2 - 550, displayHeight*5 - 1600, 110, 110);
  shop9.addImage(shop6IMG);
  shop9.scale = 0.7

  shop10 = createSprite(displayWidth/2 + 550, displayHeight*5 - 2100, 110, 110);
  shop10.addImage(shop1IMG);
  shop10.scale = 0.7

  shop11 = createSprite(displayWidth/2, displayHeight*5 - 1950, 110, 110);
  shop11.addImage(shop2IMG);
  shop11.scale = 0.7

  shop12 = createSprite(displayWidth/2 - 550, displayHeight*5 - 2100, 110, 110);
  shop12.addImage(shop3IMG);
  shop12.scale = 0.7


  //ITEMS
  item1 = createSprite(shop1.position.x+10, shop1.position.y, 35, 35);
  item1.shapeColor = "orange"
  item1.addImage(item1IMG);
  item1.scale = 0.3

  item2 = createSprite(shop2.position.x, shop2.position.y, 35, 35);
  item2.shapeColor = "orange"
  item2.addImage(item2IMG);
  item2.scale = 0.4

  item3 = createSprite(shop3.position.x, shop3.position.y, 35, 35);
  item3.shapeColor = "orange"
  item3.addImage(item3IMG);
  item3.scale = 0.4

  item4 = createSprite(shop4.position.x, shop4.position.y, 35, 35);
  item4.shapeColor = "orange"
  item4.addImage(item4IMG);
  item4.scale = 0.4

  item5 = createSprite(shop5.position.x, shop5.position.y, 35, 35);
  item5.shapeColor = "orange"
  item5.addImage(item5IMG);
  item5.scale = 0.13

  item6 = createSprite(shop6.position.x, shop6.position.y, 35, 35);
  item6.shapeColor = "orange"
  item6.addImage(item6IMG);
  item6.scale = 0.38

  item7 = createSprite(shop7.position.x-20, shop7.position.y+40, 35, 35);
  item7.shapeColor = "orange"
  item7.addImage(item7IMG);
  item7.scale = 0.4

  item8 = createSprite(shop8.position.x, shop8.position.y, 35, 35);
  item8.shapeColor = "orange"
  item8.addImage(item8IMG);
  item8.scale = 0.4

  item9 = createSprite(shop9.position.x, shop9.position.y, 35, 35);
  item9.shapeColor = "orange"
  item9.addImage(item9IMG);
  item9.scale = 0.1

  item10 = createSprite(shop10.position.x-10, shop10.position.y+70, 35, 35);
  item10.shapeColor = "orange"
  item10.addImage(item10IMG);
  item10.scale = 0.35

  item11 = createSprite(shop11.position.x, shop11.position.y, 35, 35);
  item11.shapeColor = "orange"
  item11.addImage(item11IMG);
  item11.scale = 0.3

  item12 = createSprite(shop12.position.x-10, shop12.position.y+10, 35, 35);
  item12.shapeColor = "orange"
  item12.addImage(item12IMG);
  item12.scale = 0.3

  runner = createSprite(displayWidth/2, displayHeight*5 - 100, 90, 100);
  runner.shapeColor = "white"
  runner.addImage(runnerIMG)
  runner.scale = 0.49
  
  // assigning position the camera of the game
  camera.position.x = displayWidth;
  camera.position.y = y-100;
  
}

function draw() {

  background("salmon");

  if(gameState === 0){

  fill("black");
  textSize(30);
    
  image(bg, 0, displayWidth, displayWidth*3, displayHeight*3)

  //setting the camera according to monkey
  camera.position.x = runner.position.x;
  camera.position.y = runner.position.y;
  
  if(keyDown("UP_ARROW")){
    runner.position.y -= 5;
  }
  if(keyDown("DOWN_ARROW")){
    runner.position.y += 5;
  }
  if(keyDown("LEFT_ARROW")){
    runner.position.x -= 5;
  }
  if(keyDown("RIGHT_ARROW")){
    runner.position.x += 5;
  }  


  if(runner.position.x === item1.position.x && runner.position.y === item1.position.y){
    item1.visible = false
    stockItem1.visible = true;
    score += 50;

  }

  if(runner.position.x === item2.position.x && runner.position.y === item2.position.y){
    item2.visible = false
    stockItem2.visible = true;
    score += 50;

  }

  if(runner.position.x === item3.position.x && runner.position.y === item3.position.y){
    item3.visible = false
    stockItem3.visible = true;
    score += 50;

  }

  if(runner.position.x === item4.position.x && runner.position.y === item4.position.y){
    item4.visible = false
    stockItem4.visible = true;
    score += 50;

  }

  if(runner.position.x === item5.position.x && runner.position.y === item5.position.y){
    item5.visible = false
    stockItem5.visible = true;
    score += 50;

  }

  if(runner.position.x === item6.position.x && runner.position.y === item6.position.y){
    item6.visible = false
    stockItem6.visible = true;
    score += 50;

  }

  if(runner.position.x === item7.position.x && runner.position.y === item7.position.y){
    item7.visible = false
    stockItem7.visible = true;
    score += 50;

  }

  if(runner.position.x === item8.position.x && runner.position.y === item8.position.y){
    item8.visible = false
    stockItem8.visible = true;
    score += 50;

  }

  if(runner.position.x === item9.position.x && runner.position.y === item9.position.y){
    item9.visible = false
    stockItem9.visible = true;
    score += 50;

  }

  if(runner.position.x === item10.position.x && runner.position.y === item10.position.y){
    item10.visible = false
    stockItem10.visible = true;
    score += 50;

  }

  if(runner.position.x === item11.position.x && runner.position.y === item11.position.y){
    item11.visible = false
    stockItem11.visible = true;
    score += 50;

  }

  if(runner.position.x === item12.position.x && runner.position.y === item12.position.y){  
    item12.visible = false
    stockItem12.visible = true;
    score += 50;

  }

    if(counter === 0 && frameCount > 200){
         gameState = 1;

    }

    if(runner.position.x <= 1749 && runner.position.x >= 200  &&  runner.position.y <= 1070 && runner.position.y >= 583){
      gameState = 2;
    }

}

if(gameState === 1){
  background("crimson");
  // bg2Score.visible = true;
  fill("white");
  textSize(30);
  text("Your Score is : " + score, runner.position.x, runner.position.y - 170);
}

if(gameState === 2){
  clearInterval(interval);
  background("turquoise");
  text("Your Score is : " + score, 500, 300);
  // bg2Score.visible = true;
  fill("black");
  textSize(30);
  // text("Your Score is : " + score, runner.position.x, runner.position.y - 80);

}


drawSprites();

}