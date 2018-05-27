module.exports = function findLongestCollatzSequenceBelowN(n) {
    let longestSqeuence = 0;
    let longestSequenceStartingNumber = n;
    const cache = [];

    for (let i = 4; i < n; i++) {
        let sequenceLength = 3;
        let sequenceNumber = i;

        // the Collatz sequence ends with 4, 2, 1. So we can stop at 4
        while (sequenceNumber > 4) {
            if (sequenceNumber % 2 === 0) {
                sequenceNumber = sequenceNumber / 2;
            } else {
                sequenceNumber = 3 * sequenceNumber + 1;
            }

            if (cache[sequenceNumber]) {
                sequenceLength += cache[sequenceNumber];
                break;
            }

            sequenceLength++;
        }

        if (!cache[i]) {
            cache[i] = sequenceLength;
        }

        if (sequenceLength > longestSqeuence) {
            longestSqeuence = sequenceLength;
            longestSequenceStartingNumber = i;
        }
    }

    return longestSequenceStartingNumber;
};
