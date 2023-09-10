// Question
// Assume you have a method isSubstring which checks if one word is a substring of another.
// Given two strings, s1 and s2, write a code to check if s2 is a rotation of s1 using only one call to isSubstring.
// E.G, "waterbottle" is a rotation of "erbottlewat"

function stringRotation(s1: string, s2: string): boolean {
    if (s1.length !== s2.length) {
        return false;
    }
    // You can use just a string (combined = s1 + s1), but for big data it will be better to use an Array of String (StringBuilder)
    const combined: string[] = [s1, s1];
    return isSubstring(combined, s2);
}

function isSubstring(s1: string[], s2: string): boolean {
    return s1.join('').includes(s2);
}

console.log('Value =>', stringRotation('waterbottle', 'erbottlewat')); // true

console.log('Value =>', stringRotation('abcde', 'cdeab')); // true

console.log('Value =>', stringRotation('abcde', 'abced')); // false