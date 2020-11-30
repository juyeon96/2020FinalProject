class Place {
  constructor() {

  }

  display() {
    //fireplace
    rectMode(CENTER);
    noStroke();
    fill(120, 60, 0);
    rect(width/2, 150, 200, 100);
    quad(270, 70, 370, 70, 420, 100, 220, 100);
    fill(0);
    rect(width/2, 160, 140, 65);
    stroke(0);
    line(220, 100, 420, 100);
  }
}
