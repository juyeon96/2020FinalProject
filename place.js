class Place {
  constructor() {

  }

  display() {
    //background
    background(50, 20, 5);
    stroke(255);
    line(0, 170, 220, 170);
    line(420, 170, 640, 170);

    image(art[artVal], 480, 50, 100, 80);

    image(door, 60, 0, 100, 170);

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

    //table
    image(table, 370, 280, 300, 300);

    //candle
    image(candle, 450, 160, 150, 190);

    //hand
    image(hand, 100, 220, 100, 150);
  }
}
