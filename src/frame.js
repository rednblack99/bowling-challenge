class Frame {
  constructor(roll1, roll2){
    this.roll1 = roll1;
    this.roll2 = roll2;
  }

  addScore() {
    return this.roll1 + this.roll2
  }
}
