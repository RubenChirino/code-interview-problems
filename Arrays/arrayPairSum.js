class Solution {
    static arrayPairSum(nums) {
        const K = 10000;

        if (nums.length === 0) {
            return 0;
        }

        // Counting Sort
        const counts = new Array(2 * K + 1).fill(0);
        nums.forEach(num => {
            counts[num + K]++;
        });

        let ans = 0;
        let isEvenIndex = true;
        for (let num = 0; num < counts.length; num++) {
            while (counts[num] > 0) {
                if (isEvenIndex) ans += num - K;
                isEvenIndex = !isEvenIndex;
                counts[num]--;
            }
        }

        return ans;
    }
}

// Example for debugging
const nums = [6,2,6,5,1,2];
console.log(Solution.arrayPairSum(nums)); // Expected output: 4
