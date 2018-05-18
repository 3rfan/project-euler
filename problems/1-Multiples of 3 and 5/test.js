const assert = require('assert');
const multipliesOf3And5BelowN = require('./index');

describe('multipliesOf3And5BelowN', function() {
    it('should return 23 when n is 10', () => {
        assert.equal(multipliesOf3And5BelowN(10), 23);
    });

    it('should return 233168 when n is 1000', () => {
        assert.equal(multipliesOf3And5BelowN(1000), 233168);
    });
});
