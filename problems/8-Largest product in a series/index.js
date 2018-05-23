function multiplyNumberSeries(series) {
    let product = 1;

    for (let i = 0; i < series.length; i++) {
        product *= Number(series[i]);
    }

    return product;
}

module.exports = function largestFoundProductInSeries(series, n) {
    const lastNumberSeries = series.substring(series.length - n, series.length);
    let largestFoundProduct = multiplyNumberSeries(lastNumberSeries);

    for (let i = 0; i < series.length - n; i++) {
        const numberSeries = series.substring(i, i + n);
        const product = multiplyNumberSeries(numberSeries);

        if (largestFoundProduct < product) {
            largestFoundProduct = product;
        }
    }

    return largestFoundProduct;
};
