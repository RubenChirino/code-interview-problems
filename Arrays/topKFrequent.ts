// https://leetcode.com/problems/top-k-frequent-elements/description/

function topKFrequent(nums: number[], k: number): number[] {
    if (nums.length === k) {
        return nums;
    }

    // Get number frequencies
    const freq: Map<number, number> = new Map(); 
    for (let i = 0; i < nums.length; i++) {
        freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
    }

    // Create buckets ("freq" as index and the "number" as value)
    const buckets: Array<Array<number>> = new Array(nums.length + 1);
    for (let i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }
    // Adding numbers by frequency in the "buckets"
    for (const [number, count] of freq) {
        buckets[count].push(number);
    }

    // Calc the k frequent Elements
    const ans: Array<number> = [];
    for (let i = buckets.length - 1; i >= 0; i--) {
        const values = buckets[i];
        if (!values.length) continue;
        for (let j = 0; j < values.length && ans.length !== k; j++) {
            ans.push(values[j]);
        }
    }

    return ans;
};