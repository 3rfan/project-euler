function getDigitSum(numbersString) {
    let sum = 0;

    for (let i = 0; i < numbersString.length; i++) {
        sum += Number(numbersString[i]);
    }

    return sum;
}

module.exports = function get2ToPowerNDigitSum(n) {
    const bigIntArray = [1];

    for (let i = 0; i < n; i++) {
        let carry = 0;

        for (let j = bigIntArray.length - 1; j >= 0; j--) {
            const tempResult = (bigIntArray[j] * 2) + carry;

            // e.g. if we get 16 the carry will be 1, for 24 it would be 2
            carry = Math.floor(tempResult / 10);
            
            // here we just want the least digit of the number: 14 -> 4, 22 -> 2
            bigIntArray[j] = tempResult % 10;

            // when we reach the first digit but have a carry we have to extend the array
            if (j === 0 && carry !== 0) {
                bigIntArray.unshift(carry);
            }
        }
    }

    return getDigitSum(bigIntArray.join(''));
};
