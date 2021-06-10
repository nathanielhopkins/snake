let Coord = require("./coord");

class Snake {
  constructor () {
    this.direction = "N";
    this.segments = [[10,10]];
    this.grow = 0;
  }
  
  static get DIRECTIONS () {
    return {
      "N": [-1,0],
      "E": [0,1],
      "S": [1,0],
      "W": [0,-1]
    }
  }

  head() {
    return this.segments.slice(-1)[0];
  }

  move () {
    let coord = new Coord(this.head());
    let newCoord = coord.plus(Snake.DIRECTIONS[this.direction]);
    this.segments.push(newCoord.pos);
    
    if(this.grow > 0) {
      this.grow -= 1;
    } else {
      this.segments.shift();
    };
  }

  turn (direction) {
    let coord1 = new Coord(Snake.DIRECTIONS[this.direction]);
    let coord2 = new Coord(Snake.DIRECTIONS[direction]);
    if(coord1.isOpposite(coord2)) {
      return;
    } 
    this.direction = direction;
  }

  outOfBounds() {
    if(this.head()[0] > 19 || this.head()[0] < 0) {
      return true;
    } else if (this.head()[1] > 19 || this.head()[1] < 0) {
      return true;
    } else {
      return false;
    }
  }

  collision() {
    if(this.outOfBounds() || this.selfCollision()) {
      return true;
    } else {
      return false;
    }
  }

  selfCollision() {
    let sC = false;
    for(let i = 0;i<this.segments.length - 1;i++) {
      if((this.segments[i][0] == this.head()[0]) && (this.segments[i][1] == this.head()[1])) {
        sC = true;
      }
    }
    return sC;
  }

  eatApple() {
    this.grow += 2;
  }
}

module.exports = Snake;