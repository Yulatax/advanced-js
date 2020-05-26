describe('sumOfPositive', () => {

    describe('array contains positive and negative numbers', () => {

        const arr = [-91, -93, -45, 67, 96, 40, -34, 96, -42, 58];

        it('returns object', () => {
            const result = sumOfPositive(arr);
            assert.isObject(result);
        });

        it('returns object with keys: count and sum', () => {
            const result = sumOfPositive(arr);
            assert.hasAllKeys(result, ['count', 'sum']);
        });

        it('returns object with values of type number', () => {
            const result = sumOfPositive(arr);
            assert.isNumber(result['count']);
            assert.isNumber(result['sum']);
        });

        it('returns {count: 5, sum: 357}', () => {
            const result = sumOfPositive(arr);
            assert.deepEqual(result, {count: 5, sum: 357});
        });

    });

    describe('array contains 0', () => {

        const arr = [-91, -93, 0, 67, 96, 40, -34, 96, 0, 58];

        it('returns object', () => {
            const result = sumOfPositive(arr);
            assert.isObject(result);
        });

        it('returns object with keys: count and sum', () => {
            const result = sumOfPositive(arr);
            assert.hasAllKeys(result, ['count', 'sum']);
        });

        it('returns object with values of type number', () => {
            const result = sumOfPositive(arr);
            assert.isNumber(result['count']);
            assert.isNumber(result['sum']);
        });

        it('returns {count: 5, sum: 357}', () => {
            const result = sumOfPositive(arr);
            assert.deepEqual(result, {count: 5, sum: 357});
        });

    });

    describe('array contains only negative numbers and 0', () => {

        const arr = [-91, -93, -22, 0, 0, 0, -34, 0, -1, 0];

        it('returns object', () => {
            const result = sumOfPositive(arr);
            assert.isObject(result);
        });

        it('returns object with keys: count and sum', () => {
            const result = sumOfPositive(arr);
            assert.hasAllKeys(result, ['count', 'sum']);
        });

        it('returns object with values of type number', () => {
            const result = sumOfPositive(arr);
            assert.isNumber(result['count']);
            assert.isNumber(result['sum']);
        });

        it('returns {count: 0, sum: 0}', () => {
            const result = sumOfPositive(arr);
            assert.deepEqual(result, {count: 0, sum: 0});
        });

    });

    describe('array contains float numbers', () => {

        const arr = [-91, -93, -22, 34, 12.5, 52.7, -34, 0.56, -1, 96.48];

        it('returns object', () => {
            const result = sumOfPositive(arr);
            assert.isObject(result);
        });

        it('returns object with keys: count and sum', () => {
            const result = sumOfPositive(arr);
            assert.hasAllKeys(result, ['count', 'sum']);
        });

        it('returns object with values of type number', () => {
            const result = sumOfPositive(arr);
            assert.isNumber(result['count']);
            assert.isNumber(result['sum']);
        });

        it('returns {count: 5, sum: 196.24}', () => {
            const result = sumOfPositive(arr);
            assert.deepEqual(result, {count: 5, sum: 196.24});
        });

    });

    describe('empty array', () => {

        const arr = [];

        it('returns object', () => {
            const result = sumOfPositive(arr);
            assert.isObject(result);
        });

        it('returns object with keys: count and sum', () => {
            const result = sumOfPositive(arr);
            assert.hasAllKeys(result, ['count', 'sum']);
        });

        it('returns object with values of type number', () => {
            const result = sumOfPositive(arr);
            assert.isNumber(result['count']);
            assert.isNumber(result['sum']);
        });

        it('returns {count: 0, sum: 0}', () => {
            const result = sumOfPositive(arr);
            assert.deepEqual(result, {count: 0, sum: 0});
        });

    });

    describe('array contains not number elements', () => {

        const arr = [-91, true, null, 34, 12.5, 52.7, undefined, 'hgfg', false, 96.48];

        it('returns object', () => {
            const result = sumOfPositive(arr);
            assert.isObject(result);
        });

        it('returns object with keys: count and sum', () => {
            const result = sumOfPositive(arr);
            assert.hasAllKeys(result, ['count', 'sum']);
        });

        it('returns object with values of type number', () => {
            const result = sumOfPositive(arr);
            assert.isNumber(result['count']);
            assert.isNumber(result['sum']);
        });

        it('returns {count: 4, sum: 195.68}', () => {
            const result = sumOfPositive(arr);
            assert.deepEqual(result, {count: 4, sum: 195.68});
        });

    });
});