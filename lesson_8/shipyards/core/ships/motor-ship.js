'use strict';

function MotorShip(name, model, color, power, material) {
    Ship.call(this, name, model, color);
    this.power = power;
    this.material = material;
}

MotorShip.prototype = Object.create(Ship.prototype);