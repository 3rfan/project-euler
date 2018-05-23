const assert = require('assert');
const sumOfPrimesBelowN = require('./index');

describe('sumOfPrimesBelowN', function() {
    it('should return 0 when n is smaller than 3', () => {
        assert.equal(sumOfPrimesBelowN(2), 0);
    });

    it('should return 2 when n equals 3', () => {
        assert.equal(sumOfPrimesBelowN(3), 2);
    });

    it('should return 142913828922 when n is 2.000.000', () => {
        assert.equal(sumOfPrimesBelowN(2000000), 142913828922);
    });
});
