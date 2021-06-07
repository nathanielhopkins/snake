let Board = require("./board");

class View {
  constructor($el) {
    this.board = new Board();
    this.$el = $el;
  }
}