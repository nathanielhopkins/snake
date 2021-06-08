let Board = require("./board");

class View {
  constructor($el) {
    this.board = new Board();
    this.$el = $el;
    this.keyListener();
    this.interval = setInterval(() => {this.step()}, 500);
  }

  keyListener() {
    $(window).on("keydown",document, event =>{
      this.handleKeyEvent(event.keyCode);
    })
  }

  handleKeyEvent(keyCode) {
    if(keyCode === 37) {
      this.board.snake.turn("W");
    } else if (keyCode === 38) {
      this.board.snake.turn("N");
    } else if (keyCode === 39) {
      this.board.snake.turn("E");
    } else if (keyCode === 40) {
      this.board.snake.turn("S")
    }
  }

  render() {
    this.$el.empty();
    for(let i=0;i<20;i++) {
      let $row = $("<ul>");
      for(let j=0;j<20;j++) {
        let $cell = $("<li>");
        let pos = [i,j];
        $cell.data("pos", pos);
        if(this.board.grid[pos[0]][pos[1]] == 'snake') {
          $cell.addClass('snake');
        };
        $row.append($cell);
      }
      this.$el.append($row);
    }
  }

  step() {
    this.board.snake.move();
    if(this.board.snake.collision()) {
      clearInterval(this.interval);
      alert('You lose!');
      return;
    };
    this.board.updateBoard();
    this.render();
  }
}

module.exports = View;