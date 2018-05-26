module.exports = function firstTriangularNumberWithOverNDivisors(n) {
    let triangleNumber = 0;
    let divisors = 0;
    let i = 1;

    if (n === 1) return 3;

    while (!(divisors > n)) {
        divisors = 0;
        triangleNumber =  i * (i + 1) / 2;
        sqrtOfTriangleNumber = Math.sqrt(triangleNumber);

        for (let j = 1; j <= sqrtOfTriangleNumber; j++) {
            if (triangleNumber % j === 0) {
                divisors += 2;
            }
        }

        if (sqrtOfTriangleNumber * sqrtOfTriangleNumber === triangleNumber) {
            divisors--;
        }

        i++;
    }

    return triangleNumber;
};

