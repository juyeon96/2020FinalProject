// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let fire = [];
let candle, table;
let bg;
let slider;
let gravity;

function preload() {
  candle = loadImage('./images/candle.png');
  table = loadImage('./images/table.png');
  hand = loadImage('./images/hand.png');
}

function setup() {
  createCanvas(640, 360);
  setFrameRate(60);
  slider = createSlider(0, 255, 200);
  slider.position(550, 20);
  slider.style('width', '80px');
  bg = new Place();
}

function draw() {
  background(51);

  bg.display();

  val = slider.value();

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
