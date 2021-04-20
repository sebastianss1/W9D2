const MovingObject = require("./moving_object.js");
const Util = require("./utils.js")

const DEFAULT = {
  COLOR: "#808080",
  RADIUS: 10
}

function Asteroid(options, game) {
  this.pos = options;
  this.vel = Util.randomVec(5);
  this.radius = DEFAULT.RADIUS;
  this.color = DEFAULT.COLOR;
  this.game = game;
  // //debugger
  MovingObject.call(this, this);
}
////debugger
Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
