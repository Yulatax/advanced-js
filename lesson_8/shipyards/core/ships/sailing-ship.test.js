describe('SailingShip', () => {

    describe('creates sailing ship correctly', () => {
        let sailingShip;

        beforeEach(() => {
            sailingShip = new SailingShip('SailingShip', 'SS01', 'purple', 6, 50);
        });

        it('returns object', () => {
            assert.isObject(sailingShip);
        });

        it('returns object with all properties', () => {
            assert.hasAllKeys(sailingShip, ['_isAnchorDroped',
                '_speed',
                'name',
                'model',
                'color',
                'position',
                'distance',
                'damaged',
                'mastCount',
                'sailArea']);
        });

        it('returns object with certain values', () => {
            assert.equal(sailingShip._isAnchorDroped, false);
            assert.equal(sailingShip._speed, 0);
            assert.equal(sailingShip.name, 'SailingShip');
            assert.equal(sailingShip.model, 'SS01');
            assert.equal(sailingShip.color, 'purple');
            assert.deepEqual(sailingShip.position, {x: 0, y: 0});
            assert.equal(sailingShip.distance, 0);
            assert.equal(sailingShip.damaged, false);
            assert.equal(sailingShip.mastCount, 6);
            assert.equal(sailingShip.sailArea, 50);
        });
    });
});