const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js")

const CONSTANTS = {
    DIM_X: 500,
    DIM_Y: 500,
    NUM_ASTEROIDS: 10
}

function Game() {
    debugger
    this.asteroids = [];

    this.addAsteroids();
}

Game.prototype.addAsteroids = function () {
    debugger
    for (let i = 0; i < CONSTANTS.NUM_ASTEROIDS; i++) {
        let ast = new Asteroid(this.randomPosition());
        this.asteroids.push(ast)
    }
}

Game.prototype.randomPosition = function () {
    debugger
    return [
        Math.floor(CONSTANTS.DIM_X * Math.random()),
        Math.floor(CONSTANTS.DIM_Y * Math.random())
    ];
};

Game.prototype.draw = function draw(ctx) {
    debugger
    ctx.clearRect();
    for (let i = 0; i < this.asteroids.length; i++) {
        this.asteroids[i].draw(ctx);
    }
}

module.exports = Game;