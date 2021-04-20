require("./game_view")
const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js")

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;

document.addEventListener("DOMContentLoaded", () => {
    const canvasEle = document.getElementById("game-canvas");
    canvasEle.width = 500;
    canvasEle.height = 500;
    const ctx = canvasEle.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 500, 500);

    const mo = new MovingObject({
        pos: [30, 30],
        vel: [10, 10],
        radius: 5,
        color: "#00FF00"
    })
    mo.draw(ctx);
    mo.move()

    const ast = new Asteroid({
        pos: [50, 50]
    });
    ast.draw(ctx);

})