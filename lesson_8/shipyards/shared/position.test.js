describe('Position', () => {

    describe('creates object with coordinates x and y', () => {

        let position;

        beforeEach(() => {
            position = new Position(5, 9);
        });

        it('returns object', () => {
            assert.isObject(position);
        });

        it('returns object with properties: x and y', () => {
            assert.hasAllKeys(position, ['x', 'y']);
        });

        it('returns object with values of type number', () => {
            assert.isNumber(position['x']);
            assert.isNumber(position['y']);
        });

        it('returns {x: 5, y: 9}', () => {
            assert.deepEqual(position, {x: 5, y: 9});
        });
    })
});