class Coord {
  constructor (pos) {
    this.pos = pos;
  }

  plus (otherCoord) {
    this.pos[0] += otherCoord[0];
    this.pos[1] += otherCoord[1];
  }

  equals (otherCoord) {
    if (this.pos[0] === otherCoord[0] && this.pos[1] === otherCoord[1]) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Coord;