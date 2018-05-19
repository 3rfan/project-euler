function isDivisibleFromOneToN(i, n) {
    for (let j = 2; j <= n; j++) {
        if (i % j !== 0) {
            return false;
        }
    }

    return true;
}

module.exports = function smallestMultipleBelowN(n) {
    let smallestMultiply = n;

    while (!isDivisibleFromOneToN(smallestMultiply, n)) {
        smallestMultiply += n;
    }

    return smallestMultiply;
};
