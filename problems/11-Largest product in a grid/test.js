const fs = require('fs');
const assert = require('assert');
const largestProducOfFourNumbersInNxNGrid = require('./index');

describe('largestProducOfFourNumbersInNxNGrid', function() {
    const rawGrid = JSON.parse(fs.readFileSync(__dirname + '/grid.json', 'utf8'));
    let processedGrid = rawGrid.map(row => row.map(col => Number(col)));

    it('should return 70600674 for the given 20x20 grid', () => {
        assert.equal(largestProducOfFourNumbersInNxNGrid(processedGrid), 70600674);
    });
});
