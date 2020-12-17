class Place {
  constructor() {

  }

  display() {
    //background
    background(50, 20, 5);
    stroke(255);
    line(0, 170, 640, 170);

    //photoframe
    image(art[artVal], 480, 50, 100, 80);

    //chair
    image(chair[chairVal], 50, 180, 120, 150);

    //door
    image(door[doorVal], 60, 0, 100, 170);

    //fireplace
    image(fireplace[fireplaceVal], 230, 50, 200, 170);

    //table
    image(table[tableVal], 370, 230, 300, 300);

    //candle
    image(candle[candleVal], 480, 150, 80, 150);
  }
}
