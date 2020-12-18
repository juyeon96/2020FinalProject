// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let fireplaceFire = [];
let candleFire = [];
let art = [];
let chair = [];
let candle = [];
let table = [];
let door = [];
let fireplace = [];
let val1, val2;
let pressedBool; // 0 = not pressed 1 = pressed
let bg;
let slider;
let gravity;
let button1, button2, button3, button4, button5;
let artVal, chairVal, candleVal, tableVal, doorVal, fireplaceVal;
let fireSound;
let i;

function preload() {
  candle[0] = loadImage('./images/candle1.png');
  candle[1] = loadImage('./images/candle2.png');
  table[0] = loadImage('./images/table1.png');
  table[1] = loadImage('./images/table2.png');
  door[0] = loadImage('./images/door1.jpg');
  door[1] = loadImage('./images/door2.jpg');
  fireplace[0] = loadImage('./images/fireplace1.png');
  fireplace[1] = loadImage('./images/fireplace2.png');
  fireplace[2] = loadImage('./images/fireplace3.png');
  art[0] = loadImage('./images/art1.png');
  art[1] = loadImage('./images/art2.png');
  art[2] = loadImage('./images/art3.png');
  art[3] = loadImage('./images/art4.png');
  chair[0] = loadImage('./images/chair1.png');
  chair[1] = loadImage('./images/chair2.png');
  chair[2] = loadImage('./images/chair3.png');
  chair[3] = loadImage('./images/chair4.png');
  chair[4] = loadImage('./images/chair5.png');
}

function setup() {
  createCanvas(640, 360);
  setFrameRate(60);
  slider = createSlider(0, 255, 200);
  slider.position(550, 20);
  slider.style('width', '80px');
  button1 = createButton('CHANGE PICTURE');
  button1.position(400, 20);
  button1.mousePressed(changePIC);
  button2 = createButton('CHAIR');
  button2.position(20, 340);
  button2.mousePressed(changeChair);
  button3 = createButton('CANDLE');
  button3.position(90, 340);
  button3.mousePressed(changeCandle);
  button4 = createButton('TABLE');
  button4.position(170, 340);
  button4.mousePressed(changeTable);
  button5 = createButton('FIREPLACE');
  button5.position(240, 340);
  button5.mousePressed(changeFireplace);
  bg = new Place();
  artVal = 0;
  chairVal = 0;
  candleVal = 0;
  tableVal = 0;
  doorVal = 0;
  fireplaceVal = 0;
  pressedBool = 0;
  fireSound = createAudio('./sound/fire sound.wav');
}

function draw() {
  bg.display();

  val1 = slider.value();

  // Apply gravity force to all Particles
  gravity = createVector(0, 0.1);

  for (let i = 0; i < fireplaceFire.length; i++) {
    fireplaceFire[i].applyForce(gravity);
    fireplaceFire[i].addParticle();
    fireplaceFire[i].run(val1);
  }

  for (let i = 0; i < candleFire.length; i++) {
    candleFire[i].applyForce(gravity);
    candleFire[i].addParticle();
    candleFire[i].run(val1);
  }
}

function mouseClicked() {
  if(mouseX>60 && mouseX<160 && mouseY>0 && mouseY<170)
    changeDoor();
}

function mousePressed() {
  if(fireplaceVal == 0) {
    if(mouseX>265 && mouseX<394 && mouseY>103 && mouseY<155)
      fireplaceFire.push(new ParticleSystem(1, createVector(mouseX, mouseY)));
  }

  else if(fireplaceVal == 1) {
    if(mouseX>288 && mouseX<371 && mouseY>146 && mouseY<200)
      fireplaceFire.push(new ParticleSystem(1, createVector(mouseX, mouseY)));
  }

  else if(fireplaceVal == 2) {
    if(mouseX>264 && mouseX<398 && mouseY>108 && mouseY<173)
      fireplaceFire.push(new ParticleSystem(1, createVector(mouseX, mouseY)));
  }

  if(candleVal == 0) {
    if(mouseX>478 && mouseX<482 && mouseY>160 && mouseY<164)
      candleFire.push(new ParticleSystem(1, createVector(mouseX, mouseY)));
  }

  else if(candleVal == 1) {
    if((mouseX>472 && mouseX<476 && mouseY>155 && mouseY<162) || (mouseX>521 && mouseX<525 && mouseY>152 && mouseY<159) || (mouseX>569 && mouseX<573 && mouseY>155 && mouseY<162))
      candleFire.push(new ParticleSystem(1, createVector(mouseX, mouseY)));
  }
}

function changePIC() {
  pressedBool = 1;

  if(artVal==3)
    artVal = 0;
  else
    artVal++;

  image(art[artVal], 480, 50, 100, 80);
}

function changeChair() {
  pressedBool = 1;

  if(chairVal==4)
    chairVal = 0;
  else
    chairVal++;

  image(chair[chairVal], 50, 180, 120, 150);
}

function changeCandle() {
  pressedBool = 1;

  if(candleVal==1) {
    candleFire.splice(0, candleFire.length);
    candleVal = 0;
  }
  else {
    candleFire.splice(0, candleFire.length);
    candleVal++;
  }

  image(candle[candleVal], 480, 150, (150/candle[candleVal].height)*candle[candleVal].width, 150);
}

function changeTable() {
  pressedBool = 1;

  if(tableVal==1)
    tableVal = 0;
  else
    tableVal++;

  image(table[tableVal], 370, 230, 300, 300);
}

function changeDoor() {
  if(doorVal==1)
    doorVal = 0;
  else
    doorVal++;

  image(door[doorVal], 60, 0, 100, 170);
}

function changeFireplace() {
  pressedBool = 1;

  if(fireplaceVal==2) {
    fireplaceFire.splice(0, fireplaceFire.length);
    fireplaceVal = 0;
  }
  else {
    fireplaceFire.splice(0, fireplaceFire.length);
    fireplaceVal++;
  }

  image(fireplace[fireplaceVal], 230, 50, 200, 170);
}

function mouseReleased() {
  pressedBool = 0;
}
