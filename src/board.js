let Snake = require("./snake");

class Board {
  constructor () {
    this.snake = new Snake();
    this.grid = this.buildGrid(); 
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
  }
}

module.exports = Board;