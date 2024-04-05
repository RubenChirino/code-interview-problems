
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const res = new Array(nums.length);
    for (let i = 0; i < n; i++) {
        res[2 * i] = nums[i]; // Agregar el elemento x
        res[2 * i + 1] = nums[i + n]; // Agregar el elemento y
    }
    return res;
};

console.log('Value =>', shuffle([2,5,1,3,4,7], 3)); // [2,3,5,4,1,7]