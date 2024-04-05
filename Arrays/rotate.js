function rotate(nums, k) {
    // Acelerar la rotación
    k %= nums.length;
    let temp, previous;
    for (let i = 0; i < k; i++) {
        previous = nums[nums.length - 1];
        for (let j = 0; j < nums.length; j++) {
            temp = nums[j];
            nums[j] = previous;
            previous = temp;
        }
    }
}

// Ejemplo de uso
let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
rotate(nums, k);
console.log(nums); // Debería imprimir [5, 6, 7, 1, 2, 3, 4]
 