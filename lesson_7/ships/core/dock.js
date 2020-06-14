function Dock(position = new Position(0, 0), ships = []) {
    this.position = position;
    this.ships = ships;

    this.moor = function (ship) {
        if (this._isShipInTheDock(ship)) {
            throw new Error('The ship is already in the dock');
        }

        ship.moveTo(this.position);
        ship.stop();
        ship.dropAnchor();
        this.ships.push(ship);
    };

    this.unmoor = function (ship) {
        if (!this._isShipInTheDock(ship)) {
            throw new Error('The ship is not in the dock');
        }

        this.ships.splice(this.ships.indexOf(ship), 1);
        ship.riseAnchor();
    };

    this._isShipInTheDock = ship => {
        return this.ships.some(item => item.name === ship.name);
    }
}