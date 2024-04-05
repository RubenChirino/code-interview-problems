function removeDuplicateLetters(s) {
    const stack = [];
    const seen = new Set();
    const lastOcc = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        lastOcc[s.charCodeAt(i) - 97] = i;
    }

    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i);
        if (!seen.has(c)) {
            while (stack.length > 0 && c < stack[stack.length - 1] && i < lastOcc[stack[stack.length - 1].charCodeAt(0) - 97]) {
                seen.delete(stack.pop());
            }
            seen.add(c);
            stack.push(c);
        }
    }

    return stack.join('');
}

console.log('Value =>', removeDuplicateLetters("bcabc")); // abc

console.log('Value =>', removeDuplicateLetters("cbacdcbc")); // acdb

console.log('Value =>', removeDuplicateLetters("fcabc")); // 