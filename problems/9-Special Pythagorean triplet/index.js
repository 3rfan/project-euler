module.exports = function productOfSpecialPythagoreanTripletWithSumN(n) {
    // a can't be greater than (n - 3) / 3 because then the rule a < b < c wouldn't be fulfilled
    for (let a = 1; a <= (n - 3) / 3; a++) {
        // same here for b. Since b always have to be smaller than c
        for (let b = a + 1; b < (n - a) / 2; b++) {
            const c = n - a - b;

            if (a + b + c === n && a * a + b * b === c * c) {
                return a * b * c;
            }
        }
    }
};
