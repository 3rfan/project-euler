const assert = require('assert');
const sumSquareDifferenceFromOneToN = require('./index');

describe('sumSquareDifferenceFromOneToN', function() {
    it('should return 2640 when n is 10', () => {
        assert.equal(sumSquareDifferenceFromOneToN(10), 2640);
    });

    it('should return 25164150 when n is 100', () => {
        assert.equal(sumSquareDifferenceFromOneToN(100), 25164150);
    });
});
