let Board = require("./board");

class View {
  constructor($el) {
    this.board = new Board();
    this.$el = $el;
    this.pause = false;
    this.keyListener();
    this.interval = setInterval(() => {this.step()}, 100);
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
    } else if (keyCode === 32) {
      this.togglePause();
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
        } else if (this.board.grid[pos[0]][pos[1]] == 'apple'){
          $cell.addClass('apple');
        };
        $row.append($cell);
      }
      this.$el.append($row);
    }
    this.renderScore();
  }

  step() {
    this.board.snake.move();
    if(this.board.snake.collision()) {
      clearInterval(this.interval);
      alert('You lose!');
      return;
    } else if (this.board.appleCollision()) {
      this.board.snake.eatApple();
      this.board.score += 10;
      this.board.placeApple();
    }
    this.board.updateBoard();
    this.render();
  }

  renderScore() {
    let $score = $(".score");
    $($score).html(`Score: ${this.board.score}`);
  }

  togglePause() {
    if(this.pause == false) {
      this.pause = true;
      clearInterval(this.interval);
    } else {
      this.pause = false;
      this.interval = setInterval(() => { this.step() }, 100);
    }
  }
}

module.exports = View;