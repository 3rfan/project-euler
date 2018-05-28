const fs = require('fs');
const assert = require('assert');
const getSouthEastLatticePathsAmountOfNxMGrid = require('./index');

describe('getSouthEastLatticePathsAmountOfNxMGrid', function() {
    it('should return 6 when n is 2 and m is 2', () => {
        assert.equal(getSouthEastLatticePathsAmountOfNxMGrid(2, 2), 6);
    });

    it('should return 210 when n is 6 and m is 4', () => {
        assert.equal(getSouthEastLatticePathsAmountOfNxMGrid(6, 4), 210);
    });

    it('should return 137846528820 when n is 20 and m is 20', () => {
        assert.equal(getSouthEastLatticePathsAmountOfNxMGrid(20, 20), 137846528820);
    });
});
