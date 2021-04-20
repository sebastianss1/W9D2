const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js")

const CONSTANTS = {
    DIM_X: 500,
    DIM_Y: 500,
    NUM_ASTEROIDS: 10
}

function Game() {
    ////debugger
    this.asteroids = [];
    this.addAsteroids();
}

Game.prototype.addAsteroids = function () {
    ////debugger
    for (let i = 0; i < CONSTANTS.NUM_ASTEROIDS; i++) {
        let ast = new Asteroid(this.randomPosition(), this);
        this.asteroids.push(ast)
    }
}

Game.prototype.randomPosition = function () {
    ////debugger
    return [
        Math.floor(CONSTANTS.DIM_X * Math.random()),
        Math.floor(CONSTANTS.DIM_Y * Math.random())
    ];
};

Game.prototype.draw = function draw(ctx) {
    ////debugger
    ctx.clearRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 500, 500);
    for (let i = 0; i < this.asteroids.length; i++) {
        this.asteroids[i].draw(ctx);
    }
}

Game.prototype.moveObjects = function() {
    for (let i = 0; i < this.asteroids.length; i++) {
        this.asteroids[i].move();
    }
}

Game.prototype.wrap = function(pos) {
    if (pos[0] > CONSTANTS.DIM_X) {
        pos[0] = 0;
    } else if (pos[1] > CONSTANTS.DIM_Y) {
        pos[1] = 0;
    }

    return [pos[0], pos[1]]
}

module.exports = Game;