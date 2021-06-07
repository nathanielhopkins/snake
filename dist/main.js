/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("let Snake = __webpack_require__(/*! ./snake */ \"./src/snake.js\");\n\nclass Board {\n  constructor () {\n    this.snake = new Snake();\n    this.grid = this.buildGrid(); \n  }\n\n  buildGrid() {\n    let grid = [];\n    for (let i=0;i<20;i++) {\n      let row = [];\n      for (let j=0;j<20;j++) {\n        row.push([]);\n      }\n      grid.push(row);\n    }\n    return grid;\n  }\n}\n\nmodule.exports = Board;\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/coord.js":
/*!**********************!*\
  !*** ./src/coord.js ***!
  \**********************/
/***/ ((module) => {

eval("class Coord {\n  constructor (pos) {\n    this.pos = pos;\n  }\n\n  plus (otherCoord) {\n    this.pos[0] += otherCoord[0];\n    this.pos[1] += otherCoord[1];\n  }\n\n  equals (otherCoord) {\n    if (this.pos[0] === otherCoord[0] && this.pos[1] === otherCoord[1]) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n}\n\nmodule.exports = Coord;\n\n//# sourceURL=webpack:///./src/coord.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("let View = __webpack_require__(/*! ./snake-view */ \"./src/snake-view.js\");\n\n$(() => {\n  const rootEl = $('.snake-game');\n  new View(rootEl);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/snake-view.js":
/*!***************************!*\
  !*** ./src/snake-view.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("let Board = __webpack_require__(/*! ./board */ \"./src/board.js\");\n\nclass View {\n  constructor($el) {\n    this.board = new Board();\n    this.$el = $el;\n    this.keyListener();\n    setInterval(this.step(), 5000);\n  }\n\n  keyListener() {\n    this.$el.on(\"keydown\", event => {\n      handleKeyEvent(event.target);\n    })\n  }\n\n  handleKeyEvent(key) {\n    let keyCode = key.keyCode();\n    console.log(keyCode);\n    if(keyCode == 37) {\n      this.board.snake.turn(\"W\");\n    } else if (keyCode === 38) {\n      this.board.snake.turn(\"N\");\n    } else if (keyCode === 39) {\n      this.board.snake.turn(\"E\");\n    } else if (keyCode === 40) {\n      this.board.snake.turn(\"S\")\n    }\n  }\n\n  render() {\n    this.$el.empty();\n    for(let i=0;i<20;i++) {\n      let $row = $(\"<ul>\");\n      for(let j=0;j<20;j++) {\n        let $cell = $(\"<li>\");\n        let pos = `[${i},${j}]`;\n        $cell.data(\"pos\", pos);\n        if(this.board.snake.segments.includes(pos)) {\n          $cell.addClass('snake');\n        }\n        $row.append($cell);\n      }\n      this.$el.append($row);\n    }\n  }\n\n  step() {\n    this.board.snake.move();\n    this.render();\n  }\n}\n\nmodule.exports = View;\n\n//# sourceURL=webpack:///./src/snake-view.js?");

/***/ }),

/***/ "./src/snake.js":
/*!**********************!*\
  !*** ./src/snake.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("let Coord = __webpack_require__(/*! ./coord */ \"./src/coord.js\");\n\nclass Snake {\n  constructor () {\n    this.direction = \"N\";\n    this.segments = [[9,9]];\n  }\n  \n  static get DIRECTIONS () {\n    return {\n      \"N\": [-1,0],\n      \"E\": [0,1],\n      \"S\": [1,0],\n      \"W\": [0,-1]\n    }\n  }\n\n  move () {\n    let coord = new Coord(this.segments[0]);\n    coord.plus(Snake.DIRECTIONS[this.direction]);\n    this.segments[0] = coord.pos;\n    \n  }\n\n  turn (direction) {\n    this.direction = direction;\n  }\n}\n\nmodule.exports = Snake;\n\n//# sourceURL=webpack:///./src/snake.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;