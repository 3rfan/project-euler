module.exports = function sumSquareDifferenceFromOneToN(n) {
    let sumOfSquares = 0;
    let sumOfNumbersFromOneToN = 0;

    for (let i = 1; i <= n; i++) {
        sumOfSquares += i * i;
        sumOfNumbersFromOneToN += i;
    }

    return sumOfNumbersFromOneToN * sumOfNumbersFromOneToN - sumOfSquares;
};
