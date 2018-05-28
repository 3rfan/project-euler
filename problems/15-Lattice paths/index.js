function factorial(n, limit = 1) {
    let result = 1;
    let i = n;

    while (i > limit) {
        result *= i;

        i--;
    }

    return result;
}

module.exports = function getSouthEastLatticePathsAmountOfNxMGrid(n, m) {
    const shortestWay = n + m;

    const allPossbileEasts = factorial(shortestWay, n);
    const allPossbileWests = factorial(m);

    return parseInt(allPossbileEasts / allPossbileWests, 10);
};
