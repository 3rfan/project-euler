module.exports = function productOfSpecialPythagoreanTripletWithSumN(n) {
    for (let a = 1; a <= (n - 3) / 3; a++) {
        for (let b = a + 1; b < (n - a) / 2; b++) {
            const c = n - a - b;

            if (a + b + c === n && a * a + b * b === c * c) {
                return a * b * c;
            }
        }
    }
};
