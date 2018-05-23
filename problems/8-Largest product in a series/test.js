const fs = require('fs');
const assert = require('assert');
const largestFoundProductInSeries = require('./index');

describe('largestFoundProductInSeries', function() {
    const numberSeries = fs.readFileSync(__dirname + '/numbers.txt', 'utf8');

    it('should return 5832 when n is 4', () => {
        assert.equal(largestFoundProductInSeries(numberSeries, 4), 5832);
    });

    it('should return 23514624000 when n is 13', () => {
        assert.equal(largestFoundProductInSeries(numberSeries, 13), 23514624000);
    });
});
