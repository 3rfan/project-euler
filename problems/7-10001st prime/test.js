const assert = require('assert');
const nthPrime = require('./index');

describe('nthPrime', function() {
    it('should return 13 when n is 6', () => {
        assert.equal(nthPrime(6), 13);
    });

    it('should return 104743 when n is 10001', () => {
        assert.equal(nthPrime(10001), 104743);
    });
});
