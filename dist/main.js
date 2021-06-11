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

eval("let Snake = __webpack_require__(/*! ./snake */ \"./src/snake.js\");\nlet Coord = __webpack_require__(/*! ./coord */ \"./src/coord.js\");\n\nclass Board {\n  constructor () {\n    this.snake = new Snake();\n    this.grid = this.buildGrid(); \n    this.placeApple();\n    this.score = 0;\n  }\n\n  buildGrid() {\n    let grid = [];\n    for (let i=0;i<20;i++) {\n      let row = [];\n      for (let j=0;j<20;j++) {\n        row.push([]);\n      }\n      grid.push(row);\n    }\n    return grid;\n  }\n\n  updateBoard() {\n    this.grid = this.buildGrid();\n    this.snake.segments.forEach(segment => {\n      this.grid[segment[0]][segment[1]] = 'snake';\n    })\n    this.grid[this.apple[0]][this.apple[1]] = 'apple';\n  }\n\n  placeApple() {\n    let pos = Coord.randomPos();\n    this.apple = pos;\n    for(let i = 0; i < this.snake.segments.length; i++) {\n      if ((this.snake.segments[i][0] == pos[0]) && (this.snake.segments[i][1] == pos[1])){\n        this.placeApple();\n      } else {\n        this.grid[pos[0]][pos[1]] = 'apple';\n      };\n    };\n  }\n\n  appleCollision() {\n    if(this.snake.head()[0] == this.apple[0] && this.snake.head()[1] == this.apple[1]) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n}\n\nmodule.exports = Board;\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/coord.js":
/*!**********************!*\
  !*** ./src/coord.js ***!
  \**********************/
/***/ ((module) => {

eval("class Coord {\n  constructor (pos) {\n    this.pos = pos;\n  }\n\n  plus (otherCoord) {\n    let newCoord = new Coord([this.pos[0] + otherCoord[0], this.pos[1] + otherCoord[1]]);\n    return newCoord;\n  }\n\n  equals (otherCoord) {\n    if (this.pos[0] === otherCoord[0] && this.pos[1] === otherCoord[1]) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  isOpposite(otherCoord) {\n    return ((this.pos[0] == (-1 * otherCoord.pos[0])) && (this.pos[1] == (-1 * otherCoord.pos[1])))\n  }\n\n  static randomPos() {\n    let x = Math.floor(Math.random() * 20);\n    let y = Math.floor(Math.random() * 20);\n    let pos = [x,y];\n    return pos;\n  }\n}\n\nmodule.exports = Coord;\n\n//# sourceURL=webpack:///./src/coord.js?");

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

eval("let Board = __webpack_require__(/*! ./board */ \"./src/board.js\");\n\nclass View {\n  constructor($el) {\n    this.board = new Board();\n    this.$el = $el;\n    this.keyListener();\n    this.interval = setInterval(() => {this.step()}, 100);\n  }\n\n  keyListener() {\n    $(window).on(\"keydown\",document, event =>{\n      this.handleKeyEvent(event.keyCode);\n    })\n  }\n\n  handleKeyEvent(keyCode) {\n    if(keyCode === 37) {\n      this.board.snake.turn(\"W\");\n    } else if (keyCode === 38) {\n      this.board.snake.turn(\"N\");\n    } else if (keyCode === 39) {\n      this.board.snake.turn(\"E\");\n    } else if (keyCode === 40) {\n      this.board.snake.turn(\"S\")\n    }\n  }\n\n  render() {\n    this.$el.empty();\n    for(let i=0;i<20;i++) {\n      let $row = $(\"<ul>\");\n      for(let j=0;j<20;j++) {\n        let $cell = $(\"<li>\");\n        let pos = [i,j];\n        $cell.data(\"pos\", pos);\n        if(this.board.grid[pos[0]][pos[1]] == 'snake') {\n          $cell.addClass('snake');\n        } else if (this.board.grid[pos[0]][pos[1]] == 'apple'){\n          $cell.addClass('apple');\n        };\n        $row.append($cell);\n      }\n      this.$el.append($row);\n    }\n    this.renderScore();\n  }\n\n  step() {\n    this.board.snake.move();\n    if(this.board.snake.collision()) {\n      clearInterval(this.interval);\n      alert('You lose!');\n      return;\n    } else if (this.board.appleCollision()) {\n      this.board.snake.eatApple();\n      this.board.score += 10;\n      this.board.placeApple();\n    }\n    this.board.updateBoard();\n    this.render();\n  }\n\n  renderScore() {\n    let $score = $(\".score\");\n    $($score).html(`Score: ${this.board.score}`);\n  }\n}\n\nmodule.exports = View;\n\n//# sourceURL=webpack:///./src/snake-view.js?");

/***/ }),

/***/ "./src/snake.js":
/*!**********************!*\
  !*** ./src/snake.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("let Coord = __webpack_require__(/*! ./coord */ \"./src/coord.js\");\n\nclass Snake {\n  constructor () {\n    this.direction = \"N\";\n    this.segments = [[10,10]];\n    this.grow = 0;\n  }\n  \n  static get DIRECTIONS () {\n    return {\n      \"N\": [-1,0],\n      \"E\": [0,1],\n      \"S\": [1,0],\n      \"W\": [0,-1]\n    }\n  }\n\n  head() {\n    return this.segments.slice(-1)[0];\n  }\n\n  move () {\n    let coord = new Coord(this.head());\n    let newCoord = coord.plus(Snake.DIRECTIONS[this.direction]);\n    this.segments.push(newCoord.pos);\n    \n    if(this.grow > 0) {\n      this.grow -= 1;\n    } else {\n      this.segments.shift();\n    };\n  }\n\n  turn (direction) {\n    let coord1 = new Coord(Snake.DIRECTIONS[this.direction]);\n    let coord2 = new Coord(Snake.DIRECTIONS[direction]);\n    if(coord1.isOpposite(coord2)) {\n      return;\n    } \n    this.direction = direction;\n  }\n\n  outOfBounds() {\n    if(this.head()[0] > 19 || this.head()[0] < 0) {\n      return true;\n    } else if (this.head()[1] > 19 || this.head()[1] < 0) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  collision() {\n    if(this.outOfBounds() || this.selfCollision()) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  selfCollision() {\n    let sC = false;\n    for(let i = 0;i<this.segments.length - 1;i++) {\n      if((this.segments[i][0] == this.head()[0]) && (this.segments[i][1] == this.head()[1])) {\n        sC = true;\n      }\n    }\n    return sC;\n  }\n\n  eatApple() {\n    this.grow += 2;\n  }\n}\n\nmodule.exports = Snake;\n\n//# sourceURL=webpack:///./src/snake.js?");

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