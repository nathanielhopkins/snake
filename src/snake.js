let Coord = require("./coord");

class Snake {
  constructor () {
    this.direction = "N";
    this.segments = [];
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
    let coord = new Coord(this.segments[0]);
    coord.plus(Snake.DIRECTIONS[this.direction]);
    this.segments[0] = coord.pos;
    
  }

  turn (direction) {
    this.direction = direction;
  }
}

module.exports = Snake;