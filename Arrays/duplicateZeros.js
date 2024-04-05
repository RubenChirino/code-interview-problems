// Approach 1
function duplicateZeros1(arr) {
    let possibleDups = 0;
    let length = arr.length - 1;

    // Encontrar el número de ceros a duplicar
    for (let left = 0; left <= length - possibleDups; left++) {
        if (arr[left] == 0) {
            if (left == length - possibleDups) {
                arr[length] = 0; // Mover el último cero
                length -= 1;
                break;
            }
            possibleDups++;
        }
    }

    // Índice final para colocar elementos
    let last = length - possibleDups;

    // Mover y duplicar ceros
    for (let i = last; i >= 0 && possibleDups > 0; i--) {
        if (arr[i] == 0) {
            arr[i + possibleDups] = 0;
            possibleDups--;
            arr[i + possibleDups] = 0;
        } else {
            arr[i + possibleDups] = arr[i];
        }
    }
}

// Approach 2
function duplicateZeros(arr) {
    const clone = arr.slice(); // Clone the array
    let c = 0;
    for (let i = 0; i < arr.length; i++) {
        if ((clone[c] === 0) && (i !== arr.length - 1)) {
            arr[i] = 0;
            arr[i + 1] = 0;
            i++; // Increment i to skip the next position as it's already filled with 0
        } else {
            arr[i] = clone[c];
        }
        c++;
    }
}


// Caso de uso para debuggear
let arr = [1, 7, 8, 6, 9, 0, 2, 3, 0, 0, 5, 1];
console.log("Array original:", arr);

duplicateZeros(arr);
console.log("Array después de duplicar ceros:", arr); // [1, 7, 8, 6, 9, 0, 0, 2, 3, 0, 0, 0]
