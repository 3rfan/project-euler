module.exports = function largestProducOfFourNumbersInNxNGrid(grid) {
    const gridSize = grid.length;
    let largestProduct = 1;

    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            let product = 0;

            // east check
            if (col + 4 < gridSize) {
                const currentCol = grid[row];
                product = currentCol[col] * currentCol[col + 1] * currentCol[col + 2] * currentCol[col + 3];
            }

            // west check
            if (col + 4 < gridSize) {
                const currentCol = grid[row];
                product = currentCol[col] * currentCol[col - 1] * currentCol[col - 2] * currentCol[col - 3];
            }

            // south check
            if (row + 4 < gridSize) {
                product = grid[row][col] * grid[row + 1][col] * grid[row + 2][col] * grid[row + 3][col];
            }

            // north check
            if (row - 4 >= 0) {
                product = grid[row][col] * grid[row - 1][col] * grid[row - 2][col] * grid[row - 3][col];
            }

            // south-east check
            if (row + 4 < gridSize && col + 4 < gridSize) {
                product = grid[row][col] * grid[row + 1][col + 1] * grid[row + 2][col + 2] * grid[row + 3][col + 3];
            }

            // south-west check
            if (row + 4 < gridSize && col - 4 >= 0) {
                product = grid[row][col] * grid[row + 1][col - 1] * grid[row + 2][col - 2] * grid[row + 3][col - 3];
            }

            // north-west check
            if (row - 4 >= 0 && col - 4 >= 0) {
                product = grid[row][col] * grid[row - 1][col - 1] * grid[row - 2][col - 2] * grid[row - 3][col - 3];
            }

            // north-east check
            if (row - 4 >= 0 && col + 4 < gridSize) {
                product = grid[row][col] * grid[row - 1][col + 1] * grid[row - 2][col + 2] * grid[row - 3][col + 3];
            }

            if (largestProduct < product) {
                largestProduct = product;
            }
        }
    }

    return largestProduct;
};
