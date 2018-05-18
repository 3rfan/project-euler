const assert = require('assert');
const evenFibonacciSumBelowN = require('./index');

describe('evenFibonacciSumBelowN', function() {
    it('should return 0 when n is smaller than 2', () => {
        assert.equal(evenFibonacciSumBelowN(-1), 0);
        assert.equal(evenFibonacciSumBelowN(0), 0);
        assert.equal(evenFibonacciSumBelowN(1), 0);
    });

    it('should return 2 when n is 3', () => {
        assert.equal(evenFibonacciSumBelowN(3), 2);
    });

    it('should return 4613732 when n is 4.000.000', () => {
        assert.equal(evenFibonacciSumBelowN(4000000), 4613732);
    });
});
