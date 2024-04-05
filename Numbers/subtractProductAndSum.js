var subtractProductAndSum = function(n) {
    let num = n;
    let product = 1;
    let sum = 0;

    while (num > 0) {
        let digit = num % 10;
        product *= digit;
        sum += digit;
        num = Math.floor(num / 10);
    }

    return product - sum;
};

const n1 = 234;
console.log('Input =>', n1, 'Value =>', subtractProductAndSum(n1)); // Output: 15

const n2 = 4421;
console.log('Input =>', n2, 'Value =>', subtractProductAndSum(n2)); // Output: 21