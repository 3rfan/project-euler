const assert = require('assert');
const productOfSpecialPythagoreanTripletWithSumN = require('./index');

describe('productOfSpecialPythagoreanTripletWithSumN', function() {
    it('should return 31875000 when n is 1000', () => {
        assert.equal(productOfSpecialPythagoreanTripletWithSumN(1000), 31875000);
    });
});
