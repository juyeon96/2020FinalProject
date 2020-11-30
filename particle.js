// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Simple Particle System

// A simple Particle class

class Particle {
  constructor(position) {
    this.acceleration = createVector(0, 0.0);
    this.velocity = createVector(random(-1, 1), random(-3, -0.5));
    this.position = position.copy();
    this.lifespan = 255.0;
    this.mass = 1; // Let's do something better here!
  }

  run(val) {
    this.update();
    this.display();
  }

  applyForce(force) {
    let f = force.copy();
    f.div(this.mass);
    this.acceleration.add(-f);
  }

  // Method to update position
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
    this.lifespan -= 10.0;
  }

  // Method to display
  display() {
    // stroke(200, this.lifespan);
    // strokeWeight(2);
    noStroke();
    fill(255, 82, 50, this.lifespan);
    ellipse(this.position.x, this.position.y, 12, 12);
  }

  // Is the particle still useful?
  isDead() {
    if (this.lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  }
}
