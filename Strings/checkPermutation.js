// Question
// Given two strings, write a method to decide if one is a permutation of the other.

function checkPermutation(str1, str2) {
    if (str1.length !== str2.length) return false;
    // Create Frequency Maps
    const fMapS1 = new Map();
    const fMapS2 = new Map();
    for (let i = 0; i < str1.length; i++) {
        const let1 = str1[i];
        const let2 = str2[i];
        fMapS1.set(let1, (fMapS1.get(let1) ?? 0) + 1);
        fMapS2.set(let2, (fMapS2.get(let2) ?? 0) + 1);
    }
    // Compare
    return areMapEquals(fMapS1, fMapS2);
}

function areMapEquals(map1, map2) {
    if (map1.size !== map2.size) return false;
    for (const [key, value] of map1) {
        if (map2.get(key) !== value) return false;
    }
    return true;
}

// Test cases
console.log(checkPermutation("abc", "cab")); // Output: true
console.log(checkPermutation("hello", "world")); // Output: false