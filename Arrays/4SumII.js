// https://leetcode.com/problems/4sum-ii/description

// Approach Using Hash Table
function fourSumCount(A, B, C, D) {
    let ans = 0;
    const map = new Map();

    for (const a of A) {
        for (const b of B) {
            // Calculate the sum of the current pair from A and B
            const sum = a + b;
            // Update the map with the sum, incrementing the count if the sum already exists
            map.set(sum, (map.get(sum) || 0) + 1);
        }
    }

    for (const c of C) {
        for (const d of D) {
            // Check if the negation of the sum of the current pair from C and D exists in the map
            ans += map.get(-(c + d)) || 0;
        }
    }

    return ans;
}

const A = [1, 2];
const B = [-2, -1];
const C = [-1, 2];
const D = [0, 2];

const result = fourSumCount(A, B, C, D);
console.log("Count of tuples that sum to zero:", result);

// Count of tuples that sum to zero: 2
