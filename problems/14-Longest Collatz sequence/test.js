const fs = require('fs');
const assert = require('assert');
const findLongestCollatzSequenceBelowN = require('./index');

describe('findLongestCollatzSequenceBelowN', function() {
    it('should return 9 when n is 13', () => {
        assert.equal(findLongestCollatzSequenceBelowN(13), 9);
    });

    it('should return 837799 when n is 1.000.000', () => {
        assert.equal(findLongestCollatzSequenceBelowN(1000000), 837799);
    });
});
