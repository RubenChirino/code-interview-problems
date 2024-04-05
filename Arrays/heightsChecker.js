function heightChecker(heights) {
    // Assuming height range 1-100, adjust if necessary
    const heightCounts = new Array(101).fill(0);
    
    // Count each height
    for (let height of heights) {
        heightCounts[height]++;
    }
    
    let count = 0, currentHeight = 0;
    // Iterate through the heights array and compare it against the expected order generated from heightCounts
    for (let i = 0; i < heights.length; i++) {
        // Move to the next height with a non-zero count
        while (heightCounts[currentHeight] === 0) {
            currentHeight++;
        }
        
        // If the current height doesn't match the height at position i, increment count
        if (currentHeight !== heights[i]) {
            count++;
        }
        
        // Decrement the count for the current height, as it's been "used"
        heightCounts[currentHeight]--;
    }
    
    return count;
}

// Usage case
const heights1 = [1, 1, 4, 2, 1, 3];
console.log(heightChecker(heights1)); // Output: 3

const heights2 = [5, 1, 2, 3, 4];
console.log(heightChecker(heights2)); // Output: 5

const heights3 = [1, 2, 3, 4, 5];
console.log(heightChecker(heights3)); // Output: 0
