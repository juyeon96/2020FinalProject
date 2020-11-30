// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let ps;
let fireplace;

function preload() {
  fireplace = loadImage('./images/fireplace.png');
}

function setup() {
  createCanvas(640, 360);
  setFrameRate(60);
  ps = new ParticleSystem(createVector(width / 2, height / 2));
  //bg = new Place();
}

function draw() {
  background(51);

  image(fireplace, width/2, 100, width/2, height/2);

  // Apply gravity force to all Particles
  let gravity = createVector(0, 0.1);
  ps.applyForce(gravity);

  ps.addParticle();
  ps.run();
}
