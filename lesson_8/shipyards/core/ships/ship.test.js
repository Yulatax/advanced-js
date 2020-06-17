describe('Ship', () => {

    describe('creates ship correctly', () => {
        let ship;

        beforeEach(() => {
            const position = new Position(5, 9);
            ship = new Ship('NewShip', 'NS01', 'white', position)
        });

        it('returns object', () => {
            assert.isObject(ship);
        });

        it('returns object with all properties', () => {
            assert.hasAllKeys(ship, ['_isAnchorDroped',
                                    '_speed',
                                    'name',
                                    'model',
                                    'color',
                                    'position',
                                    'distance',
                                    'damaged']);
        });

        it('returns object with certain values', () => {
            assert.equal(ship._isAnchorDroped, false);
            assert.equal(ship._speed, 0);
            assert.equal(ship.name, 'NewShip');
            assert.equal(ship.model, 'NS01');
            assert.equal(ship.color, 'white');
            assert.deepEqual(ship.position, {x: 5, y: 9});
            assert.equal(ship.distance, 0);
            assert.equal(ship.damaged, false);
        });
    });

    describe('Ship() is called without parameter \'position\'', () => {
        const ship = new Ship('NewShip', 'NS01', 'white');

        it('returns object with property position = {x: 0, y: 0}', () => {
            assert.deepEqual(ship.position, {x: 0, y: 0});
        });
    });

    describe('Methods testing', () => {

        let ship;

        beforeEach(() => {
            const position = new Position(5, 9);
            ship = new Ship('NewShip', 'NS01', 'white', position)
        });

        describe('increaseSpeed', () => {

            it('increases _speed by 10', () => {
                assert.increasesBy(() => { ship.increaseSpeed() }, ship, '_speed', 10);
            });

            it('increases _speed by 50', () => {
                assert.increasesBy(() => { ship.increaseSpeed(50) }, ship, '_speed', 50);
            });

            it('throws an error \'You have to rise anchor\'', () => {
                ship._isAnchorDroped = true;
                assert.throws(() => { ship.increaseSpeed(30) }, Error, 'You have to rise anchor');
            });
        });

        describe('decreaseSpeed', () => {

            it('decreases _speed by 10', () => {
                ship.increaseSpeed(50);
                assert.decreasesBy(() => { ship.decreaseSpeed() }, ship, '_speed', 10);
                assert.equal(ship._speed, 40);
            });

            it('decreases _speed by 30', () => {
                ship.increaseSpeed(50);
                assert.decreasesBy(() => { ship.decreaseSpeed(30) }, ship, '_speed', 30);
                assert.equal(ship._speed, 20);
            });

            it('throws an error \'Decrement is grater then current speed\'', () => {
                assert.throws(() => { ship.decreaseSpeed(30) }, Error, 'Decrement is grater then current speed');
            });
        });

        describe('stop', () => {

            it('set _speed = 0', () => {
                ship.increaseSpeed(20);
                ship.stop();
                assert.equal(ship._speed, 0);
            });

            it('throws an error \'Ship is already stopped\'', () => {
                assert.throws(() => { ship.stop() }, Error, 'Ship is already stopped');
            });
        });

        describe('getSpeed', () => {

            it('returns _speed', () => {
                ship.increaseSpeed(20);
                const speed = ship.getSpeed();
                assert.equal(speed, 20);
            });
        });

        describe('moveTo', () => {

            const coords = new Position(14, 5);

            it('throws an error \'You have to rise anchor\'', () => {
                ship._isAnchorDroped = true;
                assert.throws(() => { ship.moveTo(coords) }, Error, 'You have to rise anchor');
            });

            it('throws an error \'You have to increase speed\'', () => {
                assert.throws(() => { ship.moveTo(coords) }, Error, 'You have to increase speed');
            });

            it('increases the distance', () => {
                ship.increaseSpeed();
                assert.increasesBy(() => { ship.moveTo(coords) }, ship, 'distance', 10);
            });

            it('changes position', () => {
                ship.increaseSpeed();
                ship.moveTo(coords);
                assert.deepEqual(ship.position, {x: 14, y: 5});
            });
        });

        describe('move', () => {

            it('throws an error \'You have to rise anchor\'', () => {
                ship._isAnchorDroped = true;
                assert.throws(() => { ship.move('n') }, Error, 'You have to rise anchor');
            });

            it('throws an error \'You have to increase speed\'', () => {
                assert.throws(() => { ship.move('s') }, Error, 'You have to increase speed');
            });

            it('increases the distance by 1 and increases position.x by 1', () => {
                ship.increaseSpeed();
                assert.increasesBy(() => { ship.move('e') }, ship, 'distance', 1);
                assert.deepEqual(ship.position, {x: 6, y: 9});
            });

            it('increases the distance by 1 and decreases position.x by 1', () => {
                ship.increaseSpeed();
                assert.increasesBy(() => { ship.move('w') }, ship, 'distance', 1);
                assert.deepEqual(ship.position, {x: 4, y: 9});
            });

            it('increases the distance by 1 and increases position.y by 1', () => {
                ship.increaseSpeed();
                assert.increasesBy(() => { ship.move('n') }, ship, 'distance', 1);
                assert.deepEqual(ship.position, {x: 5, y: 10});
            });

            it('increases the distance by 1 and decreases position.y by 1', () => {
                ship.increaseSpeed();
                assert.increasesBy(() => { ship.move('s') }, ship, 'distance', 1);
                assert.deepEqual(ship.position, {x: 5, y: 8});
            });
        });

        describe('isAnchorDroped', () => {

            it('returns false', () => {
                const anchorState = ship.isAnchorDroped();
                assert.equal(anchorState, false);
            });

            it('returns true', () => {
                ship.dropAnchor();
                const anchorState = ship.isAnchorDroped();
                assert.equal(anchorState, true);
            });
        });

        describe('dropAnchor', () => {

            it('throws an error \'You have to stop the ships\'', () => {
                ship.increaseSpeed();
                assert.throws(() => { ship.dropAnchor() }, Error, 'You have to stop the ships');
            });

            it('sets _isAnchorDropped = true', () => {
                ship.dropAnchor();
                assert.equal(ship._isAnchorDroped, true);
            })
        });

        describe('riseAnchor', () => {

            it('sets _isAnchorDropped = false', () => {
                ship.riseAnchor();
                assert.equal(ship._isAnchorDroped, false);
            })
        });

        describe('_calculateTwoCoordsDistance', () => {

            it('calculates distance between 2 points correctly', () => {
                const point1 = new Position(0, 0);
                const point2 = new Position(14, 5);
                const distance = ship._calculateTwoCoordsDistance(point1, point2);
                assert.equal(distance, 15);
            })

        });
    })
});