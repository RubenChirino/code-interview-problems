

function countPairsWithDifference(arr, k) {
 const hashTable = {};
 let count = 0;
 for (const num of arr) {
  const num1 = num - k;
  const num2 = num + k;
  if (hashTable[num1]) {
    count++;
  }
  if (hashTable[num2]) {
    count++;
  }
  hashTable[num] = true;
 }
 return count;
}

const arr = [1, 7, 5, 9, 2, 12, 3];
const k = 2;
const result = countPairsWithDifference(arr, k);
console.log(result); // Output: 4
