'use strict';

function Ship(name, model, position = new Position(0, 0)) {
    this._isAnchorDroped = false;
    this._speed = 0;
    this.name = name;
    this.model = model;
    this.position = position;
    this.distance = 0;

    this.increaseSpeed = function (increment = 10) {
        if (this._isAnchorDroped) {
            throw new Error('You have to rise anchor');
        }
        this._speed += increment;
    };

    this.decreaseSpeed = function (decrement = 10) {
        if (decrement > this._speed) {
            throw new Error('Decrement is grater then current speed')
        }
        this._speed -= decrement;
    };

    this.stop = function () {
        if (this._speed === 0) {
            throw new Error('Ship is already stopped');
        }
        this._speed = 0;
    };

    this.getSpeed = function () {
        return this._speed;
    };

    this.moveTo = function (newPosition) {
        if (this._isAnchorDroped)
            throw new Error('You have to rise anchor');
        if (this._speed === 0)
            throw new Error('You have to increase speed');

        this.distance += this._calculateTwoCoordsDistance(this.position, newPosition);
        this.position = newPosition;
    };
    
    this.move = function (direction) {
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

    this.isAnchorDroped = function () {
        return this._isAnchorDroped;
    };

    this.dropAnchor = function () {
        if (this._speed !== 0)
            throw new Error('You have to stop the ship');

        this._isAnchorDroped = true;
    };

    this.riseAnchor = function () {
        this._isAnchorDroped = false;
    };

    this._calculateTwoCoordsDistance = function(a, b) {
        return Math.round(Math.sqrt(Math.pow((b.x - a.x),2) + Math.pow((b.y - a.y), 2)));
    }
}
