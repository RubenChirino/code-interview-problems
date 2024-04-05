function findMaxConsecutiveOnes(nums) {
    let longestSequence = 0;
    for (let left = 0; left < nums.length; left++) {
        let numZeroes = 0;

        // Check every consecutive sequence
        for (let right = left; right < nums.length; right++) {
            // Count how many 0's
            if (nums[right] === 0) {
                numZeroes += 1;
            }
            // Update answer if it's valid
            if (numZeroes <= 1) {
                longestSequence = Math.max(longestSequence, right - left + 1);
            }
        }
    }
    return longestSequence;
}

// Usage Example
const nums = [1, 0, 1, 1, 0, 1];
console.log(findMaxConsecutiveOnes(nums)); // Output: 4
