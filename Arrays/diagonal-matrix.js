/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    const n = mat.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += mat[i][i];
        const conditional = i !== n - 1 - i;
        console.log(conditional);
        if (conditional) {
            sum += mat[i][n - 1 - i];
        }
    }
    return sum;
};


console.log(diagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // Output: 25
console.log(diagonalSum([[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]])); // Output: 8
console.log(diagonalSum([[5]])); // Output: 5
