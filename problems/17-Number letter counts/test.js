const fs = require('fs');
const assert = require('assert');
const getNumberLettersCountOfNNumbers = require('./index');

describe('getNumberLettersCountOfNNumbers', function() {
    it('should return 19 when n is 5', () => {
        assert.equal(getNumberLettersCountOfNNumbers(5), 19);
    });

    it('should return 21124 when n is 1000', () => {
        assert.equal(getNumberLettersCountOfNNumbers(1000), 21124);
    });
});
