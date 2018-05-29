const fs = require('fs');
const assert = require('assert');
const get2ToPowerNDigitSum = require('./index');

describe('get2ToPowerNDigitSum', function() {
    it('should return 8 when n is 3', () => {
        assert.equal(get2ToPowerNDigitSum(3), 8);
    });

    it('should return 17 when n is 4', () => {
        assert.equal(get2ToPowerNDigitSum(4), 7);
    });

    it('should return 1366 when n is 1000', () => {
        assert.equal(get2ToPowerNDigitSum(1000), 1366);
    });
});
