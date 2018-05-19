const assert = require('assert');
const smallestMultipleBelowN = require('./index');

describe('smallestMultipleBelowN', function() {
    it('should return 2520 when n is 10', () => {
        assert.equal(smallestMultipleBelowN(10), 2520);
    });

    it('should return 232792560 when n is 20', () => {
        assert.equal(smallestMultipleBelowN(20), 232792560);
    });
});
