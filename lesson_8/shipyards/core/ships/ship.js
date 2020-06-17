'use strict';

function Ship(name, model, color, position = new Position(0, 0)) {
    this._isAnchorDroped = false;
    this._speed = 0;
    this.name = name;
    this.model = model;
    this.color = color;
    this.position = position;
    this.distance = 0;
    this.damaged = false;
}

Ship.prototype.increaseSpeed = function (increment = 10) {
    if (this._isAnchorDroped) {
        throw new Error('You have to rise anchor');
    }
    this._speed += increment;
};

Ship.prototype.decreaseSpeed = function (decrement = 10) {
    if (decrement > this._speed) {
        throw new Error('Decrement is grater then current speed')
    }
    this._speed -= decrement;
};

Ship.prototype.stop = function () {
    if (this._speed === 0) {
        throw new Error('Ship is already stopped');
    }
    this._speed = 0;
};

Ship.prototype.getSpeed = function () {
    return this._speed;
};

Ship.prototype.moveTo = function (newPosition) {
    if (this._isAnchorDroped)
        throw new Error('You have to rise anchor');
    if (this._speed === 0)
        throw new Error('You have to increase speed');

    this.distance += this._calculateTwoCoordsDistance(this.position, newPosition);
    this.position = newPosition;
};

Ship.prototype.move = function (direction) {
    if (this._isAnchorDroped) {
        throw new Error('You have to rise anchor');
    }
    if (this._speed === 0) {
        throw new Error('You have to increase speed');
    }

    let {x, y} = this.position;

    switch (direction) {
        case 'n': y++; break;
        case 's': y--; break;
        case 'e': x++; break;
        case 'w': x--;
    }

    const newPosition = new Position(x, y);
    this.moveTo(newPosition);
};

Ship.prototype.isAnchorDroped = function () {
    return this._isAnchorDroped;
};

Ship.prototype.dropAnchor = function () {
    if (this._speed !== 0)
        throw new Error('You have to stop the ships');

    this._isAnchorDroped = true;
};

Ship.prototype.riseAnchor = function () {
    this._isAnchorDroped = false;
};

Ship.prototype._calculateTwoCoordsDistance = function(a, b) {
    return Math.round(Math.sqrt(Math.pow((b.x - a.x),2) + Math.pow((b.y - a.y), 2)));
};