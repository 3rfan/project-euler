function findLargestPathSum(triangle, rowIndex = 0, nodeIndex = 0) {
    const row = triangle[rowIndex];
    const col = row[nodeIndex];
    
    if (rowIndex === triangle.length - 1) {
        return col;
    }
    
    const leftSum = findLargestPathSum(triangle, rowIndex + 1, nodeIndex);
    const rightSum = findLargestPathSum(triangle, rowIndex + 1, nodeIndex + 1);

    return Math.max(leftSum, rightSum) + col;
}

module.exports = function findLargestPathSumInTriangle(triangle) {
    return findLargestPathSum(triangle);
};
