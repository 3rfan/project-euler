const assert = require('assert');
const multipliesOf3And5UnderN = require('./index');

describe('multipliesOf3And5UnderN', function() {
    it('should return 23 when n is 10', () => {
        assert.equal(multipliesOf3And5UnderN(10), 23);
    });

    it('should return 233168 when n is 1000', () => {
        assert.equal(multipliesOf3And5UnderN(1000), 233168);
    });
});
