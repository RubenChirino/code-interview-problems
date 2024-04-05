// Approach 1: Using Sort & Two Pointers Approach (Best time & space complexity)
/* function threeSum(nums) {
  // Sort the array
  nums.sort((a, b) => a - b);

  const ans = [];

  // Main loop
  for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
    if (i === 0 || nums[i - 1] !== nums[i]) {
      let left = i + 1,
        right = nums.length - 1;
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
        if (sum === 0) {
          ans.push([nums[i], nums[left], nums[right]]);
          left++;
          right--;
          // Update pointers if next value is the same to avoid duplicates
          while (left < right && nums[left] === nums[left - 1]) {
            left++;
          }
        } else if (sum > 0) {
          right--;
        } else {
          left++;
        }
      }
    }
  }

  return ans;
} */


// Approach 2: Using Sort & Hash Table with Complements
/* function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length && nums[i] <= 0; ++i)
    if (i === 0 || nums[i - 1] !== nums[i]) {
      const seen = new Set();
      for (let j = i + 1; j < nums.length; ++j) {
        const complement = -(nums[i] + nums[j]);
        if (seen.has(complement)) {
          res.push([nums[i], nums[j], complement]);
          while (j + 1 < nums.length && nums[j] === nums[j + 1]) ++j;
        }
        seen.add(nums[j]);
      }
    }
  return res;
} */

// Approach 3: With out Sort & using Hash Tables
function threeSum(nums) {
    const res = new Set();
    const dups = new Set();
    const seen = new Map();
    
    for (let i = 0; i < nums.length; ++i) {
        if (dups.has(nums[i])) continue;
        dups.add(nums[i]);
        for (let j = i + 1; j < nums.length; ++j) {
            const complement = -nums[i] - nums[j];
            if (seen.has(complement) && seen.get(complement) === i) {
                const triplet = [nums[i], nums[j], complement].sort((a, b) => a - b);
                res.add(JSON.stringify(triplet)); // Use JSON.stringify to enable unique array comparison
            }
            seen.set(nums[j], i);
        }
    }
    return Array.from(res).map(JSON.parse); // Convert each string back into an array
}

// Usage example for debugging
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Expected output: [[-1, -1, 2], [-1, 0, 1]]