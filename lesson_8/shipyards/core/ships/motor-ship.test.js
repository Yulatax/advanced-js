describe('MotorShip', () => {

    describe('creates motor ship correctly', () => {
        let motorShip;

        beforeEach(() => {
            motorShip = new MotorShip('MotorShip', 'MS01', 'yellow', 30, 'steel')
        });

        it('returns object', () => {
            assert.isObject(motorShip);
        });

        it('returns object with all properties', () => {
            assert.hasAllKeys(motorShip, ['_isAnchorDroped',
                                        '_speed',
                                        'name',
                                        'model',
                                        'color',
                                        'position',
                                        'distance',
                                        'damaged',
                                        'power',
                                        'material']);
        });

        it('returns object with certain values', () => {
            assert.equal(motorShip._isAnchorDroped, false);
            assert.equal(motorShip._speed, 0);
            assert.equal(motorShip.name, 'MotorShip');
            assert.equal(motorShip.model, 'MS01');
            assert.equal(motorShip.color, 'yellow');
            assert.deepEqual(motorShip.position, {x: 0, y: 0});
            assert.equal(motorShip.distance, 0);
            assert.equal(motorShip.damaged, false);
            assert.equal(motorShip.power, 30);
            assert.equal(motorShip.material, 'steel');
        });
    });
});