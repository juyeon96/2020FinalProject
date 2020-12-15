// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let fire = [];
let art = [];
let chair = [];
let candle, table, door;
let val1, val2;
let bg;
let slider;
let gravity;
let button1, button2;
let artVal;
let fireSound;

function preload() {
  candle = loadImage('./images/candle.png');
  table = loadImage('./images/table.png');
  door = loadImage('./images/door.jpg');
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
  button2.position(100, 20);
  button2.mousePressed(changeChair);
  bg = new Place();
  artVal = 0;
  chairVal = 0;
  fireSound = createAudio('./sound/fire sound.wav');
}

function draw() {
  bg.display();

  val1 = slider.value();

  // Apply gravity force to all Particles
  gravity = createVector(0, 0.1);

  for (let i = 0; i < fire.length; i++) {
    fire[i].applyForce(gravity);
    fire[i].addParticle();
    fire[i].run(val1);
  }
}

function mousePressed() {
  fire.push(new ParticleSystem(1, createVector(mouseX, mouseY)));
}

function changePIC() {
  if(artVal==3)
    artVal = 0;
  else
    artVal++;

  image(art[artVal], 480, 50, 100, 80);
}

function changeChair() {
  if(chairVal==4)
    chairVal = 0;
  else
    chairVal++;

  image(chair[chairVal], 50, 180, 120, 150);
}
