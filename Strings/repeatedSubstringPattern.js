function repeatedSubstringPattern(s) {
    let n = s.length;
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            let pattern = '';
            for (let j = 0; j < n / i; j++) {
                pattern += s.substring(0, i);
            }
            if (s === pattern) {
                return true;
            }
        }
    }
    return false;
}

function repeatedSubstringPattern2(s) {
    const repeated = s.repeat(2);
    const sliced = repeated.slice(1, -1);
    return sliced.includes(s);
 };

console.log(repeatedSubstringPattern2("abab")); // true
console.log(repeatedSubstringPattern2("aba"));  // false
console.log(repeatedSubstringPattern2("abcabcabcabc")); // true
