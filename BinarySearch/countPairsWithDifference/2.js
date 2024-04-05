function countPairsDifference(arr, k) {
 let count = 0;
 for (let i = 0; i < arr.length; i++) {
  const num = arr[i];
  const target = num + k;
  const start = i + 1;
  const index = binarySearch(arr, target, start);
  if (index !== -1) count++;
 }
 return count;
}


function binarySearch(arr, target, start) {
 let left = start;
 let right = arr.length;
 while (left <= right) {
  const midIndex = Math.floor((left + right) / 2);
  const midValue = arr[midIndex];
  if (midValue === target) return midIndex;
  else if (midValue < target) left = midIndex + 1;
  else right = midIndex - 1;
 }
 return -1;
}

const arr = [1, 2, 3, 5, 8, 10, 13, 14, 18, 29, 35, 36, 37];
const k = 2;
console.log("Value =>", countPairsDifference(arr, k));
