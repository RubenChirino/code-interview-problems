function mySqrt(x) {
    if (x < 2) return x;

    let left = 1, right = Math.floor(x / 2);
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        let squared = mid * mid;  

        if (squared === x) {
            return mid;
        } else if (squared < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
}

// Ejemplo de prueba
const x = 8;
console.log(mySqrt(x)); // Salida esperada: 2
