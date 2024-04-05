function reverseString(str) {
    recursion(str, 0, str.length - 1);
    return str;
}

function recursion(str, left, right) {
    if (left > right) return;

    // Swap
    const temp = str[left];
    str[left] = str[right];
    str[right] = temp;

    recursion(str, ++left, --right);
}

const result = reverseString(["h", "e", "l", "l", "o"]); // ["o","l","l","e","h"]
console.log("result =>", result);