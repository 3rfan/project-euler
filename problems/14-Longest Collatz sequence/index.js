module.exports = function findLongestCollatzSequenceBelowN(n) {
    let longestSqeuence = 0;
    let longestSequenceStartingNumber = n;

    for (let i = n - 1; i > 0; i--) {
        let squenceLength = 3;
        let sequenceNumber = i;

        // the Collatz sequence ends with 4, 2, 1. So we can stop at 4
        while (sequenceNumber > 4) {
            if (sequenceNumber % 2 === 0) {
                sequenceNumber = sequenceNumber / 2;
            } else {
                sequenceNumber = 3 * sequenceNumber + 1;
            }

            squenceLength++;
        }

        if (squenceLength > longestSqeuence) {
            longestSqeuence = squenceLength;
            longestSequenceStartingNumber = i;
        }
    }

    return longestSequenceStartingNumber;
};
