function buildPrefixTable(pattern) {
    let prefixTable = new Array(pattern.length).fill(0);
    let maxPrefix = 0;

    for (let i = 1; i < pattern.length; i++) {
        while (maxPrefix > 0 && pattern[i] !== pattern[maxPrefix]) {
            maxPrefix = prefixTable[maxPrefix - 1];
        }
        if (pattern[i] === pattern[maxPrefix]) {
            maxPrefix++;
        }
        prefixTable[i] = maxPrefix;
    }

    return prefixTable;
}

function kmpSearch(text, pattern) {
    if (pattern.length === 0) return 0;
    let prefixTable = buildPrefixTable(pattern);
    let patternIndex = 0;

    for (let textIndex = 0; textIndex < text.length; textIndex++) {
        while (patternIndex > 0 && text[textIndex] !== pattern[patternIndex]) {
            patternIndex = prefixTable[patternIndex - 1];
        }
        if (text[textIndex] === pattern[patternIndex]) {
            patternIndex++;
            if (patternIndex === pattern.length) {
                return textIndex - pattern.length + 1; // Match found
            }
        }
    }

    return -1; // No match found
}

// Example usage
console.log(kmpSearch("abcabeabcabcabd", "abcabd")); // Output: 9
console.log(kmpSearch("abcabeabcabcabd", "abcaz"));   // Output: -1
