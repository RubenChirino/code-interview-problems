let maxStep;
const memo = {};

function climbStairs(n) {
    maxStep = n;
    return recursion(0);
}

function recursion(curStep) {
    console.log(`Entering recursion with curStep: ${curStep}`); // Debugging log

    if (curStep > maxStep) {
        console.log(`curStep ${curStep} is greater than maxStep ${maxStep}. Returning 0.`); // Debugging log
        return 0;
    }

    if (curStep == maxStep) {
        console.log(`curStep ${curStep} is equal to maxStep ${maxStep}. Returning 1.`); // Debugging log
        return 1;
    }

    // Check if result is in memo
    if (memo[curStep] !== undefined) {
        console.log(`Returning memoized result for curStep: ${curStep}`); // Debugging log
        return memo[curStep];
    }

    // Not in memo, calculate result
    const ways = recursion(curStep + 1) + recursion(curStep + 2);
    memo[curStep] = ways; // Store result in memo

    console.log(`Ways to climb from step ${curStep}: ${ways}`); // Debugging log
    return ways;
}

// Usage case
console.log(`Total ways to climb: ${climbStairs(3)}`);
