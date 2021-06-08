let Board = require("./board");

class View {
  constructor($el) {
    this.board = new Board();
    this.$el = $el;
    this.keyListener();
    setInterval(() => {this.step()}, 500);
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
        this.board.snake.segments.forEach(segment => {
          if(segment[0] == pos[0] && segment[1] == pos[1]) {
            $cell.addClass('snake');
          };
        });
        $row.append($cell);
      }
      this.$el.append($row);
    }
  }

  step() {
    this.board.snake.move();
    this.render();
  }
}

module.exports = View;