// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let fire, candle, table;
let bg;
let slider;

function preload() {
  candle = loadImage('./images/candle.png');
  table = loadImage('./images/table.png');
  hand = loadImage('./images/hand.png');
}

function setup() {
  createCanvas(640, 360);
  setFrameRate(60);
  slider = createSlider(0, 255, 100);
  slider.position(550, 20);
  slider.style('width', '80px');
  fire = new ParticleSystem(createVector(width / 2, height / 2));
  bg = new Place();
}

function draw() {
  background(51);

  bg.display();

  val = slider.value();

  // Apply gravity force to all Particles
  let gravity = createVector(0, 0.1);
  fire.applyForce(gravity);

  fire.addParticle();
  fire.run(val);
}
