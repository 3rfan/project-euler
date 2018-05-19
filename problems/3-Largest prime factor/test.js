const assert = require('assert');
const largestPrimeFactorBelowN = require('./index');

describe('largestPrimeFactorBelowN', function() {
    it('should return n when n is 0 or 1', () => {
        assert.equal(largestPrimeFactorBelowN(0), 0);
        assert.equal(largestPrimeFactorBelowN(1), 1);
    });

    it('should return 2 when n is 2', () => {
        assert.equal(largestPrimeFactorBelowN(2), 2);
    });

    it('should return 11 when n is 33', () => {
        assert.equal(largestPrimeFactorBelowN(33), 11);
    });

    it('should return 6857 when n is 600.851.475.143', () => {
        assert.equal(largestPrimeFactorBelowN(600851475143), 6857);
    });
});
