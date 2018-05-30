function decomposeNumber(n) {
    const numberString = n.toString();
    const length = numberString.length;
    const decomposedNumbers = [];

    for (let i = 0; i < length; i++) {
        const restOfNumber = numberString.substr(i, length - i);

        decomposedNumbers.push(restOfNumber);
    }

    return decomposedNumbers.reverse();
}

function getLettersSum(numberNames) {
    let sum = 0;

    for (let i = 0; i < numberNames.length; i++) {
        sum += numberNames[i].length;
    }

    return sum;
}

module.exports = function getNumberLettersCountOfNNumbers(n) {
    if (n > 1000) {
        throw new Error('n must not be larger than 1000');
    }

    const writtenOutNumbers = {
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine'
    };

    const specialNamedNumbers = {
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve'
    };

    const specialNamedNumberParts = {
        '2': 'twen',
        '3': 'thir',
        '5': 'fif',
        '8': 'eigh',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve'
    };

    const allWrittenOutNumbersUntilN = [];

    for (let i = 1; i <= n; i++) {
        const decomposedNumbers = decomposeNumber(i);
        const digitsCount = decomposedNumbers.length;
        const numberParts = [];

        for (let j = digitsCount - 1; j >= 0; j--) {
            const decomposedNumberPart = decomposedNumbers[j];
            const firstDigit = decomposedNumberPart[0];

            if (j === 1) {
                if (firstDigit === '1') {
                    const secondDigit = decomposedNumberPart[1];
                    const specialName = specialNamedNumbers[decomposedNumberPart];
                    const specialNamePart = specialNamedNumberParts[secondDigit];
                    const specialNumberStart = specialName ? specialName : specialNamePart;
                    const numberPart = specialNumberStart ? specialNumberStart : writtenOutNumbers[secondDigit];

                    numberParts.push(numberPart);

                    if (numberPart !== specialName) {
                        numberParts.push('teen');
                    }

                    j--;
                } else {
                    const specialNamePart = specialNamedNumberParts[firstDigit];
                    const specialNumberStart = specialNamePart ? specialNamePart : writtenOutNumbers[firstDigit];
                    const numberPart = firstDigit === '4' ? 'for' : specialNumberStart;

                    numberParts.push(numberPart);
                    
                    if (numberPart) {
                        numberParts.push('ty');
                    }
                }
            } else if (j === 2) {
                numberParts.push(writtenOutNumbers[firstDigit]);
                numberParts.push('hundred');

                if (decomposedNumbers[j - 1] !== '00') {
                    numberParts.push('and');
                }
            } else if (j === 3) {
                numberParts.push(writtenOutNumbers[firstDigit]);
                numberParts.push('thousand');

                if (decomposedNumbers[j - 1] === '000') {
                    break;
                }
            } else {
                numberParts.push(writtenOutNumbers[firstDigit]);
            }
        }

        allWrittenOutNumbersUntilN.push(numberParts.join(''));
    }

    return getLettersSum(allWrittenOutNumbersUntilN);
};
