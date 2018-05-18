module.exports = function evenFibonacciSumBelowN(n) {
    if (n < 2) return 0;

    let lastNumber = 1;
    let preLastNumber = 1;
    let sum = 0;

    for (let i = 2; i < n; i = lastNumber + preLastNumber) {
        preLastNumber = lastNumber;
        lastNumber = i;

        if (i % 2 === 0) {
            sum += i;
        }
    }

    return sum;
};
