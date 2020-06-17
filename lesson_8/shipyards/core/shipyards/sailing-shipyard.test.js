describe('SailingShipyard', () => {

    let sailingShipyard;

    beforeEach(() => {
        sailingShipyard = new SailingShipyard('SailingShipyard');
    });

    describe('creates sailing shipyard correctly', () => {

        it('returns object', () => {
            assert.isObject(sailingShipyard);
        });

        it('object has property name', () => {
            assert.property(sailingShipyard, 'name');
        });

        it('object has property name with value \'SailingShipyard\'', () => {
            assert.propertyVal(sailingShipyard, 'name', 'SailingShipyard');
        });
    });

    describe('buildSailingShip', () => {

        it('returns instance of SailingShip', () => {
            const ship = sailingShipyard.buildSailingShip('SailingShip', 'SS01', 'red', 4, 34);
            assert.instanceOf(ship, SailingShip);
        });
    });

    describe('repairSailingShip', () => {

        it('throws an error \'This shipyard can repair only sailing ships!\'', () => {
            const motorShip = new MotorShip('MotorShip', 'MS01', 'white', 46, 'steel');
            assert.throws(() => { sailingShipyard.repairSailingShip(motorShip); }, Error, 'This shipyard can repair only sailing ships!');
        });

        it('throws an error \'The ship is not damaged\'', () => {
            const sailingShip = new SailingShip('SailingShip', 'SS01', 'red', 4, 34);
            assert.throws(() => { sailingShipyard.repairSailingShip(sailingShip); }, Error, 'The ship is not damaged');
        });

        it('changes property damaged to false', () => {
            const sailingShip = new SailingShip('SailingShip', 'SS01', 'red', 4, 34);
            sailingShip.damaged = true;
            sailingShipyard.repairSailingShip(sailingShip);
            assert.equal(sailingShip.damaged, false);
        })
    });

    describe('changeSailingShip', () => {

        it('throws an error \'This shipyard can change only sailing ships!\'', () => {
            const motorShip = new MotorShip('MotorShip', 'MS01', 'white', 46, 'steel');
            assert.throws(() => { sailingShipyard.changeSailingShip(motorShip); }, Error, 'This shipyard can change only sailing ships!');
        });

        it('returns instance of SailingShip', () => {
            const ship = new SailingShip('SailingShip', 'SS01', 'red', 4, 34);
            const newShip = sailingShipyard.changeSailingShip(ship);
            assert.instanceOf(newShip, SailingShip);
        });

        it('returns object with values of name, model, color, mastCount, sailArea from input parameter', () => {
            const ship = new SailingShip('SailingShip', 'SS01', 'red', 4, 34);
            const newShip = sailingShipyard.changeSailingShip(ship);
            assert.equal(newShip.name, 'SailingShip');
            assert.equal(newShip.model, 'SS01');
            assert.equal(newShip.color, 'red');
            assert.equal(newShip.mastCount, 4);
            assert.equal(newShip.sailArea, 34);
        });

        it('returns object with default values of _isAnchorDroped, _speed, position, distance, damaged', () => {
            const ship = new SailingShip('SailingShip', 'SS01', 'red', 4, 34);
            const newShip = sailingShipyard.changeSailingShip(ship);
            assert.equal(newShip._isAnchorDroped, false);
            assert.equal(newShip._speed, 0);
            assert.deepEqual(newShip.position, new Position(0, 0));
            assert.equal(newShip.distance, 0);
            assert.equal(newShip.damaged, false);
        });
    });
});