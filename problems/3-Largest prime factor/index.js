module.exports = function largestPrimeFactorBelowN(n) {
    let largestPrimeFactor = n;
    let i = 2;

    while (i <= Math.sqrt(largestPrimeFactor)) {
        if (largestPrimeFactor % i === 0) {
            largestPrimeFactor = largestPrimeFactor / i;
        } else {
            i++;
        }
    }

    return largestPrimeFactor;
};
