// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let fire = [];
let art = [];
let candle, table, hand, door;
let val1, val2;
let bg;
let slider;
let gravity;
let button;
let artVal;

function preload() {
  candle = loadImage('./images/candle.png');
  table = loadImage('./images/table.png');
  hand = loadImage('./images/hand.png');
  door = loadImage('./images/door.jpg');
  art[0] = loadImage('./images/art1.png');
  art[1] = loadImage('./images/art2.png');
  art[2] = loadImage('./images/art3.png');
  art[3] = loadImage('./images/art4.png');
}

function setup() {
  createCanvas(640, 360);
  setFrameRate(60);
  slider = createSlider(0, 255, 200);
  slider.position(550, 20);
  slider.style('width', '80px');
  button = createButton('CHANGE PICTURE');
  button.position(400, 20);
  button.mousePressed(changePIC);
  bg = new Place();
  artVal = 0;
}

function draw() {
  bg.display();

  val1 = slider.value();

  // Apply gravity force to all Particles
  gravity = createVector(0, 0.1);

  for (let i = 0; i < fire.length; i++) {
    fire[i].applyForce(gravity);
    fire[i].addParticle();
    fire[i].run(val);
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
