const fs = require('fs');
const assert = require('assert');
const firstTriangularNumberWithOverNDivisors = require('./index');

describe('firstTriangularNumberWithOverNDivisors', function() {
    it('should return 3 when n is 1', () => {
        assert.equal(firstTriangularNumberWithOverNDivisors(1), 3);
    });

    it('should return 28 when n is 5', () => {
        assert.equal(firstTriangularNumberWithOverNDivisors(5), 28);
    });

    it('should return 76576500 when n is 500', () => {
        assert.equal(firstTriangularNumberWithOverNDivisors(500), 76576500);
    });
});
