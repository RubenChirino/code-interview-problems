// Using Two Pointers
function threeSumSmaller(nums, target) {
    // Validation
    if (!nums || nums.length < 3) {
        return 0;
    }

    nums.sort((a, b) => a - b);

    let ans = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1, right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum < target) {
                ans += right - left;
                left++;
            } else {
                right--;
            }
        }
    }

    return ans;
}

// Define the array and target value
const nums = [-2, 0, 1, 3];
const target = 2;

// Call the threeSumSmaller function with the nums array and target
const result = threeSumSmaller(nums, target); 
/* 
Output: 2
Explanation: Because there are two triplets which sums are less than 2:
[-2,0,1]
[-2,0,3]
*/

// Log the result to the console
console.log(`The number of triplets with a sum smaller than ${target} is: ${result}`);

/* Using Binary Search
function threeSumSmaller(nums, target) {
    nums.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        const twoSumTarget = target - nums[i];
        for (let si = i + 1; si < nums.length - 1; si++) {
            let j = binarySearch(nums, si, twoSumTarget - nums[si]);
            sum += j - si;
        }
    }
    return sum;

    function binarySearch(nums, startIndex, target) {
        let left = startIndex;
        let right = nums.length - 1;
        while (left < right) {
            const mid = Math.floor((left + right + 1) / 2);
            if (nums[mid] < target) {
                left = mid;
            } else {
                right = mid - 1;
            }
        }
        return left;
    }
}

// Ejemplo de uso
const nums = [-2, 0, 1, 3];
const target = 2;
console.log("Total triplets smaller than target:", threeSumSmaller(nums, target));
*/