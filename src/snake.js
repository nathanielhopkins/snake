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

  move () {
    let coord = new Coord(this.segments.slice(-1)[0]);
    coord.plus(Snake.DIRECTIONS[this.direction]);
    this.segments.push(coord.pos);
    
    if(this.grow > 0) {
      this.grow -= 1;
    } else {
      this.segments.shift();
    };
  }

  turn (direction) {
    this.direction = direction;
  }

  outOfBounds() {
    if(this.segments[0][0] > 19 || this.segments[0][0] < 0) {
      return true;
    } else if (this.segments[0][1] > 19 || this.segments[0][1] < 0) {
      return true;
    } else {
      return false;
    }
  }

  collision() {
    if(this.outOfBounds()) {
      return true;
    } else {
      return false;
    }
  }

  eatApple() {
    this.grow += 3;
  }
}

module.exports = Snake;