module.exports = function getNumberLettersCountOfNNumbers(n) {
    if (n > 9999) {
        throw new Error('n must not be larger than 1000');
    }

    const writtenOutNumbers = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    };

    let allWrittenOutNumbersSumUntilN = 0;

    for (let i = 1; i <= n; i++) {
        const digits = i.toString().length;
        let number = i;
        let writtenOutNumber = '';

        if (digits > 3) {
            const firstDigit = Math.floor(i / 1000);
            writtenOutNumber += writtenOutNumbers[firstDigit];
            writtenOutNumber += 'thousand';

            if (i % 1000 === 0) {
                allWrittenOutNumbersSumUntilN += writtenOutNumber.length;
                continue;
            }

            number -= firstDigit * 1000;
        }
        
        if (digits > 2) {
            const firstDigit = Math.floor(number / 100);
            writtenOutNumber += writtenOutNumbers[firstDigit];
            writtenOutNumber += 'hundred';

            if (i % 100 === 0) {
                allWrittenOutNumbersSumUntilN += writtenOutNumber.length;
                continue;
            }

            writtenOutNumber += 'and';
            number -= firstDigit * 100;
        }

        if (digits > 1) {
            const productOfTen = Math.floor(number / 10) * 10;

            if (writtenOutNumbers[number]) {
                writtenOutNumber += writtenOutNumbers[number];
                allWrittenOutNumbersSumUntilN += writtenOutNumber.length;
                continue;
            }

            writtenOutNumber += writtenOutNumbers[productOfTen];
            number -= productOfTen;
        }

        writtenOutNumber += writtenOutNumbers[number];
        
        allWrittenOutNumbersSumUntilN += writtenOutNumber.length;
    }

    return allWrittenOutNumbersSumUntilN;
};
