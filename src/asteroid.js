const MovingObject = require("./moving_object.js");
const Util = require("./utils.js")

const DEFAULT = {
  COLOR: "#808080",
  RADIUS: 10
}

function Asteroid(options) {
  debugger
  MovingObject.call(this, options);
  this.vel = Util.randomVec(5);
  this.radius = DEFAULT.RADIUS;
  this.color = DEFAULT.COLOR;
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
