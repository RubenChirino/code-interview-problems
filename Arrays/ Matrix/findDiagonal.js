class DiagonalTraverser {
    traverseMatrixDiagonally(matrix) {
        const diagonals = {};
        for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
            for (let colIndex = 0; colIndex < matrix[rowIndex].length; colIndex++) {
                // Determine the diagonal key (sum of indices)
                const key = rowIndex + colIndex;
                const value = matrix[rowIndex][colIndex];

                // Initialize diagonal array
                if (!diagonals.hasOwnProperty(key)) {
                    diagonals[key] = [];
                }

                diagonals[key].push(value);
            }
        }

        // Construct the result
        const diagonalOrder = [];
        // Iterate over each diagonal
        for (let diagonal in diagonals) {
            let values = diagonals[diagonal];
            // Reverse every even-numbered diagonal to create the "snake" effect
            if (diagonal % 2 === 0) values = values.reverse();
            diagonalOrder.push(...values);
        }

        return diagonalOrder;
    }
}

// Test case
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const traverser = new DiagonalTraverser();
console.log(traverser.traverseMatrixDiagonally(matrix));
