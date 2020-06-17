describe('MotorShipyard', () => {

    let motorShipyard;

    beforeEach(() => {
        motorShipyard = new MotorShipyard('MotorShipyard');
    });

    describe('creates motor shipyard correctly', () => {

        it('returns object', () => {
            assert.isObject(motorShipyard);
        });

        it('object has property name', () => {
            assert.property(motorShipyard, 'name');
        });

        it('object has property name with value \'MotorShipyard\'', () => {
            assert.propertyVal(motorShipyard, 'name', 'MotorShipyard');
        });
    });

    describe('buildMotorShip', () => {

        it('returns instance of MotorShip', () => {
            const ship = motorShipyard.buildMotorShip('MotorShip', 'MS01', 'purple', 38, 'steel');
            assert.instanceOf(ship, MotorShip);
        });
    });

    describe('repairMotorShip', () => {

        it('throws an error \'This shipyard can repair only motor ships!\'', () => {
            const sailingShip = new SailingShip('SailingShip', 'SS01', 'white', 4, 28);
            assert.throws(() => { motorShipyard.repairMotorShip(sailingShip); }, Error, 'This shipyard can repair only motor ships!');
        });

        it('throws an error \'The ship is not damaged\'', () => {
            const motorShip = new MotorShip('MotorShip', 'MS01', 'white', 36, 'steel');
            assert.throws(() => { motorShipyard.repairMotorShip(motorShip); }, Error, 'The ship is not damaged');
        });

        it('changes property damaged to false', () => {
            const motorShip = new MotorShip('MotorShip', 'MS01', 'white', 36, 'steel');
            motorShip.damaged = true;
            motorShipyard.repairMotorShip(motorShip);
            assert.equal(motorShip.damaged, false);
        })
    });

    describe('changeMotorShip', () => {

        it('throws an error \'This shipyard can change only motor ships!\'', () => {
            const sailingShip = new SailingShip('SailingShip', 'SS01', 'white', 4, 28);
            assert.throws(() => { motorShipyard.changeMotorShip(sailingShip); }, Error, 'This shipyard can change only motor ships!');
        });

        it('returns instance of MotorShip', () => {
            const ship = new MotorShip('MotorShip', 'MS01', 'purple', 38, 'steel');
            const newShip = motorShipyard.changeMotorShip(ship);
            assert.instanceOf(newShip, MotorShip);
        });

        it('returns object with values of name, model, color, power, material from input parameter', () => {
            const ship = new MotorShip('MotorShip', 'MS01', 'purple', 38, 'steel');
            const newShip = motorShipyard.changeMotorShip(ship);
            assert.equal(newShip.name, 'MotorShip');
            assert.equal(newShip.model, 'MS01');
            assert.equal(newShip.color, 'purple');
            assert.equal(newShip.power, 38);
            assert.equal(newShip.material, 'steel');
        });

        it('returns object with default values of _isAnchorDroped, _speed, position, distance, damaged', () => {
            const ship = new MotorShip('MotorShip', 'MS01', 'purple', 38, 'steel');
            const newShip = motorShipyard.changeMotorShip(ship);
            assert.equal(newShip._isAnchorDroped, false);
            assert.equal(newShip._speed, 0);
            assert.deepEqual(newShip.position, new Position(0, 0));
            assert.equal(newShip.distance, 0);
            assert.equal(newShip.damaged, false);
        });
    });
});