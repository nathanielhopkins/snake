let Snake = require("./snake");
let Coord = require("./coord");

class Board {
  constructor () {
    this.snake = new Snake();
    this.grid = this.buildGrid(); 
    this.placeApple();
  }

  buildGrid() {
    let grid = [];
    for (let i=0;i<20;i++) {
      let row = [];
      for (let j=0;j<20;j++) {
        row.push([]);
      }
      grid.push(row);
    }
    return grid;
  }

  updateBoard() {
    this.grid = this.buildGrid();
    this.snake.segments.forEach(segment => {
      this.grid[segment[0]][segment[1]] = 'snake';
    })
    this.grid[this.apple[0]][this.apple[1]] = 'apple';
  }

  placeApple() {
    let pos = Coord.randomPos();
    this.apple = pos;
    this.grid[pos[0]][pos[1]] = 'apple';
  }

  appleCollision() {
    if(this.snake.segments[0][0] == this.apple[0] && this.snake.segments[0][1] == this.apple[1]) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Board;