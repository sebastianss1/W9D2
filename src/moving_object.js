function MovingObject(pos, vel, radius, color) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
}

MovingObject.prototype.draw = function(ctx) {
    debugger
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true); // ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
    ctx.lineWidth = 10;
    ctx.fill();
}

module.exports = MovingObject;