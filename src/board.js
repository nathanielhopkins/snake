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
    for(let i = 0; i < this.snake.segments.length; i++) {
      if ((this.snake.segments[i][0] == pos[0]) && (this.snake.segments[i][1] == pos[1])){
        this.placeApple();
      } else {
        this.grid[pos[0]][pos[1]] = 'apple';
      };
    };
  }

  appleCollision() {
    if(this.snake.head()[0] == this.apple[0] && this.snake.head()[1] == this.apple[1]) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Board;