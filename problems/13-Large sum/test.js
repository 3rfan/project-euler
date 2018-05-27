const fs = require('fs');
const assert = require('assert');
const firstNDigitsOfNumbersListSum = require('./index');

describe('firstNDigitsOfNumbersListSum', function() {
    const rawNumbersList = fs.readFileSync(__dirname + '/numbers.txt', 'utf8');
    let processedNumbersList = rawNumbersList.split('\n').filter(listEntry => listEntry.length);

    it('should return 5537376230 for the given number list when n is 10', () => {
        assert.equal(firstNDigitsOfNumbersListSum(processedNumbersList, 10), '5537376230');
    });
});
