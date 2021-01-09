var runner;
var shop1,shop2,shop3,shop4,shop5,shop6,shop7,shop8,shop9,shop10,shop11,shop12;
var y;
var invisibleGround;
var item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,item11,item12;
var item1IMG, item2IMG, item3IMG;
var houseDesk;
var gameState = 0;
var stockItem1;
var timer;
var counter = 0;
var timeleft = 10;
var min, sec;
var timeOutSound;
var shop1IMG;
var dinnerTable;

function preload() {
    
  bg = loadImage("images/bg.png");

  timeOutSound = loadSound("checkPoint.mp3");

  dinnerTable = loadImage("images/houseTable.jpg");

  runnerIMG = loadImage("images/girl.jpg");

  shop1IMG = loadImage("images/shop1IMG.png")
  // shop2 = loadImage("")
  // shop3 = loadImage("")
  // shop4 = loadImage("")
  // shop5 = loadImage("")
  // shop6 = loadImage("")
  // shop7 = loadImage("")
  // shop8 = loadImage("")
  // shop9 = loadImage("")
  // shop10 = loadImage("")
  // shop11 = loadImage("")
  // shop12 = loadImage("")

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

  var interval = setInterval(timeIt, 1000)

  function timeIt(){
     counter++;
     timer.html(convertSeconds(timeleft - counter));
     if(counter === timeleft){
      timeOutSound.play();
      counter = 0;
      clearInterval(interval);
     }
  }


  houseDesk = createSprite(displayWidth/2, displayHeight*3, displayWidth-200, 500);
  houseDesk.shapeColor = "orange"
  houseDesk.addImage(dinnerTable)

  stockItem1 = createSprite(houseDesk.position.x, houseDesk.position.y - 120, 35, 35);
  stockItem1.shapeColor = "green"
  stockItem1.addImage(item1IMG);
  stockItem1.scale = 0.4
  stockItem1.visible = false;
  
  shop1 = createSprite(displayWidth/2 + 550, displayHeight*5 - 450, 110, 110);
  shop1.addImage(shop1IMG);
  shop1.scale = 0.7

  shop2 = createSprite(displayWidth/2, displayHeight*5 - 450, 110, 110);
  shop3 = createSprite(displayWidth/2 - 550, displayHeight*5 - 450, 110, 110);

  shop4 = createSprite(displayWidth/2 + 550, displayHeight*5 - 650, 110, 110);
  shop5 = createSprite(displayWidth/2, displayHeight*5 - 650, 110, 110);
  shop6 = createSprite(displayWidth/2 - 550, displayHeight*5 - 650, 110, 110);

  shop7 = createSprite(displayWidth/2 + 550, displayHeight*5 - 850, 110, 110);
  shop8 = createSprite(displayWidth/2, displayHeight*5 - 850, 110, 110);
  shop9 = createSprite(displayWidth/2 - 550, displayHeight*5 - 850, 110, 110);

  shop10 = createSprite(displayWidth/2 + 550, displayHeight*5 - 1050, 110, 110);
  shop11 = createSprite(displayWidth/2, displayHeight*5 - 1050, 110, 110);
  shop12 = createSprite(displayWidth/2 - 550, displayHeight*5 - 1050, 110, 110);

  //ITEMS
  item1 = createSprite(shop1.position.x-20, shop1.position.y+60, 35, 35);
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

  item7 = createSprite(shop7.position.x, shop7.position.y, 35, 35);
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

  item10 = createSprite(shop10.position.x, shop10.position.y, 35, 35);
  item10.shapeColor = "orange"
  item10.addImage(item10IMG);
  item10.scale = 0.35

  item11 = createSprite(shop11.position.x, shop11.position.y, 35, 35);
  item11.shapeColor = "orange"
  item11.addImage(item11IMG);
  item11.scale = 0.3

  item12 = createSprite(shop12.position.x, shop12.position.y, 35, 35);
  item12.shapeColor = "orange"
  item12.addImage(item12IMG);
  item12.scale = 0.4

  runner = createSprite(displayWidth/2, displayHeight*5 - 100, 90, 100);
  runner.shapeColor = "white"
  runner.addImage(runnerIMG)
  runner.scale = 0.49
  
  invisibleGround = createSprite(displayWidth/2, displayHeight*5+500, displayWidth, 110);
  invisibleGround.shapeColor = "black"

  // assigning position the camera of the game
  camera.position.x = displayWidth;
  camera.position.y = y-100;
  

}

function draw() {

  background("pink");

  if(gameState === 0){

    if(timeleft === counter){
      gameState = 1
  
      camera.position.x = -500
      camera.position.y = -500
  
      if(keyDown("UP_ARROW")){
        runner.position.y += 0;
      }
      if(keyDown("DOWN_ARROW")){
        runner.position.y += 0;
      }
      if(keyDown("LEFT_ARROW")){
        runner.position.x += 0;
      }
      if(keyDown("RIGHT_ARROW")){
        runner.position.x += 0;
      }  
    }  
  
  image(bg, 0, displayWidth, displayWidth*2, displayHeight*3)

  // //setting the camera according to monkey
  camera.position.x = runner.position.x;
  camera.position.y = runner.position.y;
  
  runner.collide(invisibleGround);

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

  drawSprites();

  if(runner.position.x === shop1.position.x && runner.position.y === shop1.position.y){
    item1.visible = false
  }

  if(runner.position.x === shop2.position.x && runner.position.y === shop2.position.y){
    item2.visible = false
  }

  if(runner.position.x === shop3.position.x && runner.position.y === shop3.position.y){
    item3.visible = false
  }
  

  if(runner.position.x === shop4.position.x && runner.position.y === shop4.position.y){
    item4.visible = false
  }

  if(runner.position.x === shop5.position.x && runner.position.y === shop5.position.y){
    item5.visible = false
  }

  if(runner.position.x === shop6.position.x && runner.position.y === shop6.position.y){
    item6.visible = false
  }


  if(runner.position.x === shop7.position.x && runner.position.y === shop7.position.y){
    item7.visible = false
  }

  if(runner.position.x === shop8.position.x && runner.position.y === shop8.position.y){
    item8.visible = false
  }

  if(runner.position.x === shop9.position.x && runner.position.y === shop9.position.y){
    item9.visible = false
  }

  
  if(runner.position.x === shop10.position.x && runner.position.y === shop10.position.y){
    item10.visible = false
  }

  if(runner.position.x === shop11.position.x && runner.position.y === shop11.position.y){
    item11.visible = false
  }

  if(runner.position.x === shop12.position.x && runner.position.y === shop12.position.y){  
    item12.visible = false
  }

  if(runner.position.x > 483 && runner.position.x < 783  &&  runner.position.y < houseDesk.position.y - 100 && runner.position.y < houseDesk.position.y + 100){
     if (keyIsDown(98)) {
      stockItem1.visible = true;

  }
  }
}
}