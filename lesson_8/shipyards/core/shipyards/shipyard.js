'use strict';

function Shipyard(name) {
    this.name = name;
}

Shipyard.prototype.repaintShip = function (ship, color) {
  ship.color = color;
};