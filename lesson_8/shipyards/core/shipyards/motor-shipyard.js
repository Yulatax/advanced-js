'use strict';

function MotorShipyard(name) {
    Shipyard.call(this, name);
}

MotorShipyard.prototype = Object.create(Shipyard.prototype);

MotorShipyard.prototype.buildMotorShip = function (name, model, color, power, material) {
    return new MotorShip(name, model, color, power, material);
};

MotorShipyard.prototype.repairMotorShip = function (ship) {
    if (!(ship instanceof MotorShip)) {
        throw new Error('This shipyard can repair only motor ships!');
    }
    if (!ship.damaged) {
        throw new Error('The ship is not damaged');
    }
    ship.damaged = false;
};

MotorShipyard.prototype.changeMotorShip = function (ship) {
    if (!(ship instanceof MotorShip)) {
        throw new Error('This shipyard can change only motor ships!');
    }
    return this.buildMotorShip(ship.name, ship.model, ship.color, ship.power, ship.material);
};