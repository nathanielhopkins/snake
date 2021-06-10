class Coord {
  constructor (pos) {
    this.pos = pos;
  }

  plus (otherCoord) {
    let newCoord = new Coord([this.pos[0] + otherCoord[0], this.pos[1] + otherCoord[1]]);
    return newCoord;
  }

  equals (otherCoord) {
    if (this.pos[0] === otherCoord[0] && this.pos[1] === otherCoord[1]) {
      return true;
    } else {
      return false;
    }
  }

  isOpposite(otherCoord) {
    return (this.pos[0] == (-1 * otherCoord[0]) && this.pos[1] == (-1 * otherCoord[1]))
  }

  static randomPos() {
    let x = Math.floor(Math.random() * 20);
    let y = Math.floor(Math.random() * 20);
    let pos = [x,y];
    return pos;
  }
}

module.exports = Coord;