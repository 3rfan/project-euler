function isPrime(n) {
    if (n === 2) return true;
    if (n < 2) return false;

    const sqrtOfN = Math.sqrt(n);

    for (let i = 3; i <= sqrtOfN; i += 2) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

module.exports = function sumOfPrimesBelowN(n) {
    if (n < 3) return 0;

    let sum = 2;
    const sieve = [];
    const sqrtOfN = Math.sqrt(n);

    for (let i = 3; i < n; i += 2) {
        sieve[i] = true;
    }

    for (let i = 3; i <= sqrtOfN; i += 2) {
        if (sieve[i] === true) {
            for (let j = 2 * i; j <= n; j += i) {
                sieve[j] = false;
            }
        }
    }

    for (let i = 3; i < n; i += 2) {
        if (sieve[i]) {
            sum += i;
        }
    }

    return sum;
};
