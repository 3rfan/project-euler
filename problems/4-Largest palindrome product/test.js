const assert = require('assert');
const largestPalindromeNumberProductWithNDigits = require('./index');

describe('largestPalindromeNumberProductWithNDigits', function() {
    it('should return 9009 when n is 2', () => {
        assert.equal(largestPalindromeNumberProductWithNDigits(2), 9009);
    });

    it('should return 906609 when n is 3', () => {
        assert.equal(largestPalindromeNumberProductWithNDigits(3), 906609);
    });
});
