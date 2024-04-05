function removeOuterParentheses(s) {
    let result = '';
    let openCount = 0;
    
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        
        if (c === '(') {
            if (openCount > 0) {
                result += c;
            }
            openCount++;
        } else {
            openCount--;
            if (openCount > 0) {
                result += c;
            }
        }
    }
    
    return result;
}

// Ejemplos de uso
const s1 = "(()())(())";
const s2 = "(()())(())(()(()))";
const s3 = "()()";

const result1 = removeOuterParentheses(s1);
const result2 = removeOuterParentheses(s2);
const result3 = removeOuterParentheses(s3);

console.log("Result for s1:", result1); // Output: "()()()"
console.log("Result for s2:", result2); // Output: "()()()()(())"
console.log("Result for s3:", result3); // Output: ""
