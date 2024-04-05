function countPairsWithDifference(arr, k) {
    let count = 0;

    // Recorrer el array
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        
        // Realizar una búsqueda binaria para encontrar el número que es num + k
        const index = binarySearch(arr, num + k, i + 1);
        if (index !== -1) {
            count++;
        }
    }

    return count;
}

function binarySearch(arr, target, start) {
    let left = start;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}

// Ejemplo de uso
const arr = [1, 2, 3, 5, 7, 9, 12];
const k = 2;
const result = countPairsWithDifference(arr, k);
console.log(result); // Output: 4
