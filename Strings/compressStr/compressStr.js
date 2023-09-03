// Implement a method to perform basic string compression using the counts of the repeated characters.
// For example, the string 'aabcccccaaa' would become 'a2b1c5a3'.
// If the "compressed" string would not become smaller than the original string, your method should return the original string.
// You can assume the string has only uppercase and lowercase letter (a-z). 

function compress(str) {
    if (str === null || str?.length <= 1) {
        return str ?? '';
    }
    const compressedArr = [];
    let counter = 1;
    let pointer = str[0];
    for (let i = 1; i < str.length; i++) {
        const letter = str[i];
        if (pointer === letter) {
            counter++;
        } else {
            compressedArr.push(pointer + counter);
            pointer = letter;
            counter = 1;
        }
    }
    // Handle the last character
    compressedArr.push(pointer + counter)
    // Getting the result
    const compressedStr = compressedArr.join('');
    return (compressedStr.length < str.length) ? compressedStr : str;
}

console.log('Value =>', compress('aabcccccaaa')); // a2b1c5a3

console.log('Value =>', compress('aaaaaa')); // a6

console.log('Value =>', compress('z')); // z

console.log('Value =>', compress('abcdefghijk')); // abcdefghijk