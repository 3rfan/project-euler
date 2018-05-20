function isPrime(n) {
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

module.exports = function nthPrime(n) {
    if (n === 1) return 2;

    let foundPrimes = 1; // cause we already count 2
    let i = 3;

    while (foundPrimes < n) {
        if (isPrime(i)) {
            foundPrimes++;
        }

        if (foundPrimes === n) {
            break;
        }

        i += 2;
    }

    return i;
};
