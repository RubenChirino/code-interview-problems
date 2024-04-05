function fourSum(nums, target) {
    nums.sort((a, b) => a - b); // Sort the array
    return kSum(nums, target, 0, 4);
}

function kSum(nums, target, start, k) {
    let res = [];

    if (start === nums.length) {
        return res;
    }

    const averageValue = target / k;

    if (nums[start] > averageValue || averageValue > nums[nums.length - 1]) {
        return res;
    }

    if (k === 2) {
        return twoSum(nums, target, start);
    }

    for (let i = start; i < nums.length; ++i) {
        if (i === start || nums[i - 1] !== nums[i]) {
            for (const subset of kSum(nums, target - nums[i], i + 1, k - 1)) {
                res.push([nums[i], ...subset]);
            }
        }
    }

    return res;
}

function twoSum(nums, target, start) {
    let res = [];
    let lo = start, hi = nums.length - 1;

    while (lo < hi) {
        const currSum = nums[lo] + nums[hi];
        if (currSum < target || (lo > start && nums[lo] === nums[lo - 1])) {
            ++lo;
        } else if (currSum > target || (hi < nums.length - 1 && nums[hi] === nums[hi + 1])) {
            --hi;
        } else {
            res.push([nums[lo++], nums[hi--]]);
        }
    }

    return res;
}

// Define the array of numbers and the target sum
const nums = [1, 0, -1, 0, -2, 2];
const target = 0;

// Call the fourSum function with the defined nums array and target
const result = fourSum(nums, target);

// Log the result to the console
console.log("Quadruplets that sum to the target:", result);

// Quadruplets that sum to the target: [ [ -2, -1, 1, 2 ], [ -2, 0, 0, 2 ], [ -1, 0, 0, 1 ] ]
