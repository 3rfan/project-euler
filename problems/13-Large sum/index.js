module.exports = function firstNDigitsOfNumbersListSum(numbersList, n) {
    let sum = 0;

    for (let i = 0; i < numbersList.length; i++) {
        const entry = numbersList[i];

        sum += Number(entry);
    }

    return sum.toString().replace('.', '').substr(0, n);
};
