require("./moving_object.js")

const DEFAULT = {
  COLOR: "#808080";
  RADIUS: 10;
}

function Asteroid(options) {
    this.pos = options.pos;
    this.vel = Util.randomVec(5)
    this.radius = DEFAULT.radius;
    this.color = DEFAULT.color;
}

