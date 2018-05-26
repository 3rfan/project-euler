function getDivisorsCountOfN(n) {
    const sqrtOfN = Math.sqrt(n);
    let divisors = 2;

    for (let j = 2; j <= sqrtOfN; j++) {
        if (n % j === 0) {
            divisors += 2;
        }

        if (j === sqrtOfN) {
            divisors = divisors - 1;
        }
    }

    return divisors;
}

module.exports = function firstTriangularNumberWithOverNDivisors(n) {
    let triangleNumber = 0;
    let i = 1;
    let divisors = 0;

    if (n === 1) return 3;

    while (!(divisors > n)) {
        triangleNumber =  i * (i + 1) / 2;

        if (i % 2 === 0) {
            divisors = getDivisorsCountOfN(i / 2) * getDivisorsCountOfN(i + 1);
        } else {
            divisors = getDivisorsCountOfN(i) * getDivisorsCountOfN((i + 1) / 2);
        }

        i++;
    }

    return triangleNumber;
};

