class Solution {
    constructor() {
        this.goalStep = 0;
        this.cache = [];
    }

    climbStairs(n) {
        this.goalStep = n;
        this.cache = new Array(this.goalStep + 1).fill(0);
        return this.upStep(0);
    }

    upStep(curStep) {
        if (curStep > this.goalStep) return 0;
        if (curStep === this.goalStep) return 1;
        if (this.cache[curStep] > 0) return this.cache[curStep];

        this.cache[curStep] = this.upStep(curStep + 1) + this.upStep(curStep + 2);
        return this.cache[curStep];
    }
}

// Example Usage
const solution = new Solution();
const stairs = 5; // Number of stairs
console.log(`Number of ways to climb ${stairs} stairs:`, solution.climbStairs(stairs));
