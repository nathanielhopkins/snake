let Board = require("./board");

class View {
  constructor($el) {
    this.board = new Board();
    this.$el = $el;
  }

  keyListener() {
    this.$el.on("keydown", event => {
      handleKeyEvent(event.target);
    })
  }

  handleKeyEvent(key) {
    let keyCode = key.keyCode();
    console.log(keyCode);
    if(keyCode == 37) {
      this.board.snake.turn("W");
    } else if (keyCode === 38) {
      this.board.snake.turn("N");
    } else if (keyCode === 39) {
      this.board.snake.turn("E");
    } else if (keyCode === 40) {
      this.board.snake.turn("S")
    }
  }
}