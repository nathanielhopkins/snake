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

  static randomPos() {
    let x = Math.floor(Math.random() * 20);
    let y = Math.floor(Math.random() * 20);
    let pos = [x,y];
    return pos;
  }
}

module.exports = Coord;