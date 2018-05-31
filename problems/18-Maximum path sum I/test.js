const fs = require('fs');
const assert = require('assert');
const findLargestPathSumInTriangle = require('./index');

function loadFile(fileName) {
    const rawTriangle = fs.readFileSync(__dirname + `/${fileName}`, 'utf8');
    
    return rawTriangle.split('\n')
        .filter(row => row)
        .map(row => row.split(' ').map(col => Number(col)));
}

describe('findLargestPathSumInTriangle', function() {
    const largeTriangle = loadFile('triangle-large.txt');
    const smallTriangle = loadFile('triangle-small.txt');

    it('should return 23 as the largest path sum', () => {
        assert.equal(findLargestPathSumInTriangle(smallTriangle), 23);
    });

    it('should return 1074 as the largest path sum', () => {
        assert.equal(findLargestPathSumInTriangle(largeTriangle), 1074);
    });
});
