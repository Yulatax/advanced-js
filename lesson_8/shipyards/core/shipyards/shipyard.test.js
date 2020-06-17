describe('Shipyard', () => {

    let shipyard;

    beforeEach(() => {
        shipyard = new Shipyard('Shipyard');
    });

    describe('creates shipyard correctly', () => {

        it('returns object', () => {
            assert.isObject(shipyard);
        });

        it('object has property name', () => {
            assert.property(shipyard, 'name');
        });

        it('object has property name with value \'Shipyard\'', () => {
            assert.propertyVal(shipyard, 'name', 'Shipyard');
        });
    });

    describe('repaintShip', () => {

        it('changes ship color to yellow', () => {
            const ship = new MotorShip('MotorShip', 'MS01', 'blue', 38, 'steel');
            shipyard.repaintShip(ship, 'yellow');
            assert.equal(ship.color, 'yellow');
        })
    })
});