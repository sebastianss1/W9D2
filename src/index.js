require("./game_view")
const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js")
const Game = require("./game");
const GameView = require("./game_view");

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;

document.addEventListener("DOMContentLoaded", () => {
    const canvasEle = document.getElementById("game-canvas");
    canvasEle.width = 500;
    canvasEle.height = 500;
    const ctx = canvasEle.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 500, 500);
    
    const game = new Game();
    game.draw(ctx);

    const gameView = new GameView(game, ctx);
    gameView.start();

    // const mo = new MovingObject({
    //     pos: [30, 30],
    //     vel: [10, 10],
    //     radius: 5,
    //     color: "#00FF00"
    // })
    // ////debugger
    // mo.draw(ctx);

})