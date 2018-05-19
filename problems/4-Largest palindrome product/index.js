function isPalindromeNumber(n) {
    const tmpString = String(n);

    for (let k = 0; k < tmpString.length; k++) {
        if (tmpString[k] !== tmpString[tmpString.length - 1 - k]) {
            return false;
        }
    }

    return true;
}

module.exports = function largestPalindromeNumberProductWithNDigits(n) {
    largestNumberWithNDigits = String().padEnd(n, 9);
    smallestNumberWithNDigits = String(1).padEnd(n, 0);
    largestPalindrome = 0;

    for (let i = largestNumberWithNDigits; i >= smallestNumberWithNDigits; i--) {
        for (let j = largestNumberWithNDigits; j >= i; j--) {
            const product = i * j;

            if (product < largestPalindrome) {
                break;
            }

            if (isPalindromeNumber(product)) {
                largestPalindrome = product;
            }
        }
    }

    return largestPalindrome;
};
