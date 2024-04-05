function countPairsWithDifference(arr, k) {
    // Crear una tabla hash para almacenar los valores del array
    const hashTable = {};
    
    // Inicializar el contador de pares
    let count = 0;

    // Recorrer el array
    for (const num of arr) {
        // Calcular el valor necesario para formar un par con diferencia k
        const num1 = num - k;
        const num2 = num + k;
        
        // Verificar si el valor necesario para el par existe en la tabla hash
        if (hashTable[num1]) {
            count++;
        }
        if (hashTable[num2]) {
            count++;
        }

        // Agregar el valor actual a la tabla hash
        hashTable[num] = true;
    }

    // El contador contiene la cantidad de pares con diferencia k
    return count;
}

// Ejemplo de uso
const arr = [1, 7, 5, 9, 2, 12, 3];
const k = 2;
const result = countPairsWithDifference(arr, k);
console.log(result); // Output: 4
