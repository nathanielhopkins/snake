let View = require("./snake-view");

$(() => {
  const rootEl = $('.snake-game');
  new View(rootEl);
});