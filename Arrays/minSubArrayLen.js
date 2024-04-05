// BRUTE FORCE 1
function minSubArrayLenDebug(s, nums) {
    const n = nums.length;
    let ans = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let sum = 0;
            for (let k = i; k <= j; k++) {
                sum += nums[k];
                console.log(`i=${i}, j=${j}, k=${k}, sum=${sum}`); // Debugging output
            }
            if (sum >= s) {
                ans = Math.min(ans, (j - i + 1));
                console.log(`Found subarray: start=${i}, end=${j}, length=${j - i + 1}`); 
                break;
            }
        }
    }
    return (ans !== Number.MAX_SAFE_INTEGER) ? ans : 0;
}

// BRUTE FORCE 2
function findMinSubArrayLengthForSum(targetSum, numbers) {
    const totalNumbers = numbers.length;
    let minLength = Number.MAX_SAFE_INTEGER;
    for (let startIndex = 0; startIndex < totalNumbers; startIndex++) {
        let currentSum = 0;
        for (let endIndex = startIndex; endIndex < totalNumbers; endIndex++) {
            currentSum += numbers[endIndex];
            if (currentSum >= targetSum) {
                minLength = Math.min(minLength, (endIndex - startIndex + 1)); 
                console.log(`Found subarray: start=${startIndex}, end=${endIndex}, length=${endIndex - startIndex + 1}`);
                break;
            }
        }
    }
    return (minLength !== Number.MAX_SAFE_INTEGER) ? minLength : 0;
}



// OPTIMAL
function minSubArrayLen(s, nums) {
    let n = nums.length;
    let ans = Number.MAX_SAFE_INTEGER;
    let sum = 0;
    let start = 0;

    for (let end = 0; end < n; end++) {
        sum += nums[end];

        while (sum >= s) {
            ans = Math.min(ans, end - start + 1);
            sum -= nums[start];
            start++;
        }
    }

    return (ans !== Number.MAX_SAFE_INTEGER) ? ans : 0;
}

// Call the debug version
const s = 7;
const nums = [2, 3, 1, 2, 4, 3];
console.log(minSubArrayLen(s, nums));
