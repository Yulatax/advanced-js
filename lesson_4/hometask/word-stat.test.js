describe('wordStat', () => {

    describe('Lorem ipsum dolor sit amet.', () => {

        const text = 'Lorem ipsum dolor sit amet.';

        it('returns array', () => {
            const result = wordStat(text);
            assert.isArray(result);
        });

        it('returns array of length 5', () => {
            const result = wordStat(text);
            assert.lengthOf(result, 5);
        });

        it('returns array of objects with keys word and code', () => {
            const result = wordStat(text);
            result.forEach(obj => {
                assert.hasAllKeys(obj, ['word', 'code']);
            });
        });

        it('returns array of objects with values of type string and number', () => {
            const result = wordStat(text);
            result.forEach(obj => {
                assert.isString(obj['word']);
                assert.isNumber(obj['code']);
            });
        });

        it('returns correct result', () => {
            const result = wordStat(text);
            const structure = [
                { word: 'Lorem', code: 511 },
                { word: 'ipsum', code: 558 },
                { word: 'dolor', code: 544 },
                { word: 'sit', code: 336 },
                { word: 'amet.', code: 469 }
            ];
            assert.deepEqual(result, structure);
        });
    });

    describe('Abra cadabra.', () => {

        const text = 'Abra cadabra.';

        it('returns array', () => {
            const result = wordStat(text);
            assert.isArray(result);
        });

        it('returns array of length 2', () => {
            const result = wordStat(text);
            assert.lengthOf(result, 2);
        });

        it('returns array of objects with keys word and code', () => {
            const result = wordStat(text);
            result.forEach(obj => {
                assert.hasAllKeys(obj, ['word', 'code']);
            });
        });

        it('returns array of objects with values of type string and number', () => {
            const result = wordStat(text);
            result.forEach(obj => {
                assert.isString(obj['word']);
                assert.isNumber(obj['code']);
            });
        });

        it('returns correct result', () => {
            const result = wordStat(text);
            const structure = [
                { word: 'Abra', code: 374 },
                { word: 'cadabra.', code: 748 }
            ];
            assert.deepEqual(result, structure);
        });
    });

    describe('empty text', () => {

        const text = '';

        it('returns array', () => {
            const result = wordStat(text);
            assert.isArray(result);
        });

        it('returns array of length 1', () => {
            const result = wordStat(text);
            assert.lengthOf(result, 1);
        });

        it('returns array of objects with keys word and code', () => {
            const result = wordStat(text);
            result.forEach(obj => {
                assert.hasAllKeys(obj, ['word', 'code']);
            });
        });

        it('returns array of objects with values of type string and number', () => {
            const result = wordStat(text);
            result.forEach(obj => {
                assert.isString(obj['word']);
                assert.isNumber(obj['code']);
            });
        });

        it("returns [{word: '', code: 0}]", () => {
            const result = wordStat(text);
            assert.deepEqual(result, [{word: '', code: 0}]);
        });
    });

    describe('only spaces text', () => {

        const text = '  ';

        it('returns array', () => {
            const result = wordStat(text);
            assert.isArray(result);
        });

        it('returns array of length 3', () => {
            const result = wordStat(text);
            assert.lengthOf(result, 3);
        });

        it('returns array of objects with keys word and code', () => {
            const result = wordStat(text);
            result.forEach(obj => {
                assert.hasAllKeys(obj, ['word', 'code']);
            });
        });

        it('returns array of objects with values of type string and number', () => {
            const result = wordStat(text);
            result.forEach(obj => {
                assert.isString(obj['word']);
                assert.isNumber(obj['code']);
            });
        });

        it("returns 3 objects {word: '', code: 0} in array", () => {
            const result = wordStat(text);
            assert.deepEqual(result, [
                {word: '', code: 0},
                {word: '', code: 0},
                {word: '', code: 0}]
            );
        });
    });

    describe('one word text', () => {

        const text = 'Word';

        it('returns array', () => {
            const result = wordStat(text);
            assert.isArray(result);
        });

        it('returns array of length 1', () => {
            const result = wordStat(text);
            assert.lengthOf(result, 1);
        });

        it('returns array of objects with keys word and code', () => {
            const result = wordStat(text);
            result.forEach(obj => {
                assert.hasAllKeys(obj, ['word', 'code']);
            });
        });

        it('returns array of objects with values of type string and number', () => {
            const result = wordStat(text);
            result.forEach(obj => {
                assert.isString(obj['word']);
                assert.isNumber(obj['code']);
            });
        });

        it("returns 1 object {word: 'Word', code: 412} in array", () => {
            const result = wordStat(text);
            assert.deepEqual(result, [{word: 'Word', code: 412}]);
        });
    });
});

describe('calculateCodesSum', () => {

    describe('correct string Lorem', () => {

        const word = 'Lorem';

        it('returns number', () => {
            const result = calculateCodesSum(word);
            assert.isNumber(result);
        });

        it('returns 511', () => {
            const result = calculateCodesSum(word);
            assert.equal(result, 511);
        });
    });

    describe('correct string ipsum', () => {

        const word = 'ipsum';

        it('returns number', () => {
            const result = calculateCodesSum(word);
            assert.isNumber(result);
        });

        it('returns 558', () => {
            const result = calculateCodesSum(word);
            assert.equal(result, 558);
        });
    });

    describe('empty string', () => {

        const word = '';

        it('returns number', () => {
            const result = calculateCodesSum(word);
            assert.isNumber(result);
        });

        it('returns 0', () => {
            const result = calculateCodesSum(word);
            assert.equal(result, 0);
        });
    });
});