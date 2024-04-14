function findShortestPathToFood(grid) {
    // Directions for north, east, south, and west
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]; 
    const rows = grid.length;
    const columns = grid[0].length;
    const queue = [];

    // Locate the start position marked by '*'
    outerloop:
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            if (grid[row][col] === '*') {
                queue.push({ row, col, distance: 0 }); // Using an object to represent Position
                break outerloop;
            }
        }
    }

    // BFS to find the shortest path
    while (queue.length > 0) {
        const current = queue.shift();
        for (let direction of directions) {
            const nextRow = current.row + direction[0];
            const nextCol = current.col + direction[1];

            if (isValid(nextRow, nextCol, rows, columns) && grid[nextRow][nextCol] !== 'X') {
                if (grid[nextRow][nextCol] === '#') {
                    return current.distance + 1; // Food found
                }
                grid[nextRow][nextCol] = 'X'; // Mark as visited
                queue.push({ row: nextRow, col: nextCol, distance: current.distance + 1 });
            }
        }
    }

    return -1; // No path found
}

function isValid(row, col, maxRows, maxCols) {
    return (row >= 0 && row < maxRows) && (col >= 0 && col < maxCols);
}

// Example usage:
const grid1 = [
    ['X', 'X', 'X', 'X', 'X', 'X'],
    ['X', '*', 'O', 'O', 'O', 'X'],
    ['X', 'O', 'O', '#', 'O', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X']
];
const grid2 = [
    ['X', 'X', 'X', 'X', 'X'],
    ['X', '*', 'X', 'O', 'X'],
    ['X', 'O', 'X', '#', 'X'],
    ['X', 'X', 'X', 'X', 'X']
];
const grid3 = [
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', '*', 'O', 'X', 'O', '#', 'O', 'X'],
    ['X', 'O', 'O', 'X', 'O', 'O', 'X', 'X'],
    ['X', 'O', 'O', 'O', 'O', '#', 'O', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']
];

console.log(findShortestPathToFood(grid1)); // Output: 3
console.log(findShortestPathToFood(grid2)); // Output: -1
console.log(findShortestPathToFood(grid3)); // Output: 6
