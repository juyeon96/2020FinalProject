// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

class ParticleSystem {
  constructor(num, position) {
    this.origin = position.copy();
    this.particles = [];
    for (let i = 0; i < num; i++) {
      this.particles.push(new Particle(this.origin));
    }
  }

  addParticle() {
    this.particles.push(new Particle(this.origin));
  }

  run(val) {
    for (let particle of this.particles) {
      particle.run(val);
    }

    // Filter removes any elements of the array that do not pass the test
    this.particles = this.particles.filter(particle => !particle.isDead());
  }

  // A function to apply a force to all Particles
  applyForce(f) {
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].applyForce(f);
    }
  }
}
