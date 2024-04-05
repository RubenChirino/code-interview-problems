function isIsomorphic(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let mappingDictStoT = new Array(256).fill(-1);
    let mappingDictTtoS = new Array(256).fill(-1);

    for (let i = 0; i < s.length; i++) {
        let c1 = s.charCodeAt(i);
        let c2 = t.charCodeAt(i);

        // Case 1: No mapping exists in either of the dictionaries
        if (mappingDictStoT[c1] === -1 && mappingDictTtoS[c2] === -1) {
            mappingDictStoT[c1] = c2;
            mappingDictTtoS[c2] = c1;
        }
        // Case 2: Either mapping doesn't exist in one of the dictionaries or Mapping exists and
        // it doesn't match in either of the dictionaries or both
        else if (!(mappingDictStoT[c1] === c2 && mappingDictTtoS[c2] === c1)) {
            return false;
        }
    }

    return true;
}

// Usage Example:
console.log(isIsomorphic("egg", "add")); // Expected output: true
console.log(isIsomorphic("foo", "bar")); // Expected output: false
console.log(isIsomorphic("paper", "title")); // Expected output: true


// Approach two

/* function transformString(s) {
    let indexMapping = {};
    let result = "";

    for (let i = 0; i < s.length; i++) {
        let c1 = s[i];

        if (indexMapping[c1] === undefined) {
            indexMapping[c1] = i;
        }

        result += indexMapping[c1].toString() + " ";
    }
    return result;
}

function isIsomorphic(s, t) {
    return transformString(s) === transformString(t);
} */