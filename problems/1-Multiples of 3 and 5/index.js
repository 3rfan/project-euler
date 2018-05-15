module.exports = function multipliesOf3And5UnderN(n) {
    const a = 3;
    const b = 5;
    let result = 0;

    for (let i = a; i < n; i++) {
        if (i % a === 0 || i % b === 0) {
            result += i;
        }
    }

    return result;
};
