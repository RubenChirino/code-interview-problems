function sortArrayByParity(nums) {
    let leftIndex = 0, rightIndex = nums.length - 1;
    while (leftIndex < rightIndex) {
        // If the number at leftIndex is odd and the number at rightIndex is even, swap them
        if (nums[leftIndex] % 2 > nums[rightIndex] % 2) {
            let temp = nums[leftIndex];
            nums[leftIndex] = nums[rightIndex];
            nums[rightIndex] = temp;
        }

        // Move leftIndex to the right if the current number is even
        if (nums[leftIndex] % 2 === 0) leftIndex++;
        // Move rightIndex to the left if the current number is odd
        if (nums[rightIndex] % 2 === 1) rightIndex--;
    }

    return nums;
}

// Usage case test
const testArray = [3, 1, 2, 4];
console.log("Original array:", testArray);
const sortedArray = sortArrayByParity(testArray);
console.log("Sorted by parity:", sortedArray);
