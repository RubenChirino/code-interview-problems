/*
In a technical interview, you've been given an array of numbers and you need to find a pair of numbers that are equal to the given target value. Numbers can be either positive, negative, or both. Can you design an algorithm that works in O(n)—linear time or greater?

let sequence = [8, 10, 2, 9, 7, 5]
let results = pairValues(sum: 11) = //returns (9, 2)
*/

// Brute Force
function findPairBruteForce(target, sequence) {
    let ans = [];
    for (let i = 0; i < sequence.length; i++) {
        let num = sequence[i];
        for (let j = 0; j < sequence.length; j++) {
            if (j === i) continue;
            let num2 = sequence[j];
            if (num + num2 === target) return [num, num2];
        }
    }
    return null;
}

console.log('Result =>', pairValuesBruteForce(11, [8, 10, 2, 9, 7, 5]));

function findPairSumHash(target, sequence) {
    let hashTable = new Set();
    for (let i = 0; i < sequence.length; i++) {
        let num = sequence[i], diff = target - num;
        if (hashTable.get(diff)) return [diff, num];
        hashTable.add(num);
    }
    return null;
}

console.log('Result =>', pairValuesBruteForce(11, [8, 10, 2, 9, 7, 5]));