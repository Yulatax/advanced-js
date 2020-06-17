'use strict';

function SailingShip(name, model, color, mastCount, sailArea) {
    Ship.call(this, name, model, color);
    this.mastCount = mastCount;
    this.sailArea = sailArea;
}

SailingShip.prototype = Object.create(Ship.prototype);