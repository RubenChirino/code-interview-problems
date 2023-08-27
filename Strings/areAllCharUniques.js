// Question
// Implement an algorithm to determine if a string has all unique characters.

function areAllCharUniques(str) {
  if (str === null || str.length === 0) {
    return true;
  }
  const set = new Set();
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (set.has(char)) return false;
    set.add(char);
  }
  return true;
}

const str1 = 'abc';
console.log('Input =>', str1, 'Result =>', areAllCharUniques(str1));

const str2 = 'hihowareyou';
console.log('Input =>', str2, 'Result =>', areAllCharUniques(str2));

const str3 = 'abcdefghijklmnopqrsztwu';
console.log('Input =>', str3, 'Result =>', areAllCharUniques(str3));

const str4 = '';
console.log('Input =>', str4, 'Result =>', areAllCharUniques(str4));

const str5 = '  ';
console.log('Input =>', str5, 'Result =>', areAllCharUniques(str5));

// Borders Case or Questions

// Should we be case sensitive?
const str6 = 'aAbBcCdDeE';
console.log('Input =>', str6, 'Result =>', areAllCharUniques(str6));

// Are the numbers valid?
const str7 = 'aht3410jd83';
console.log('Input =>', str7, 'Result =>', areAllCharUniques(str7));

// What if you cannot use additional data structures?

function hasAllUniqueCharacters(str) {
  if (str === null || str.length === 0) {
      return true;
  }
  // Assuming ASCII characters (0-127)
  if (str.length > 128) {
      return false; // String can't have all unique characters if length > 128
  }
  const charSet = new Array(128).fill(false);
  for (let i = 0; i < str.length; i++) {
      const charValue = str.charCodeAt(i);
      if (charSet[charValue]) {
          return false; // Character is already marked as seen, so it's not unique
      }
      charSet[charValue] = true;
  }
  return true;
}
