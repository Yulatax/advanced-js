'use strict';

function SailingShipyard(name) {
    Shipyard.call(this, name);
}

SailingShipyard.prototype = Object.create(Shipyard.prototype);

SailingShipyard.prototype.buildSailingShip = function (name, model, color, mastCount, sailArea) {
    return new SailingShip(name, model, color, mastCount, sailArea);
};

SailingShipyard.prototype.repairSailingShip = function (ship) {
    if (!(ship instanceof SailingShip)) {
        throw new Error('This shipyard can repair only sailing ships!');
    }
    if (!ship.damaged) {
        throw new Error('The ship is not damaged');
    }
    ship.damaged = false;
};

SailingShipyard.prototype.changeSailingShip = function (ship) {
    if (!(ship instanceof SailingShip)) {
        throw new Error('This shipyard can change only sailing ships!');
    }
    return this.buildSailingShip(ship.name, ship.model, ship.color, ship.mastCount, ship.sailArea);
};