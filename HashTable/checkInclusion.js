function checkInclusion(s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }
    
    const s1FreqMap = new Map();
    const s2FreqMap = new Map();
    
    for (let i = 0; i < s1.length; i++) {
        s1FreqMap.set(s1[i], (s1FreqMap.get(s1[i]) || 0) + 1);
        s2FreqMap.set(s2[i], (s2FreqMap.get(s2[i]) || 0) + 1);
    }
    
    for (let i = 0; i < s2.length - s1.length; i++) {
        if (mapsAreEqual(s1FreqMap, s2FreqMap)) {
            return true;
        }
        
        const charToRemove = s2[i];
        const charToAdd = s2[i + s1.length];
        
        if (charToRemove !== charToAdd) {
            const newValForCharToRemove = s2FreqMap.get(charToRemove) - 1;
            if (newValForCharToRemove === 0) {
                s2FreqMap.delete(charToRemove);
            } else {
                s2FreqMap.set(charToRemove, newValForCharToRemove);
            }
            s2FreqMap.set(charToAdd, (s2FreqMap.get(charToAdd) || 0) + 1);
        }
    }
    
    return false;
}

function mapsAreEqual(map1, map2) {
    if (map1.size !== map2.size) {
        return false;
    }
    
    for (const [key, value] of map1) {
        if (map2.get(key) !== value) {
            return false;
        }
    }
    
    return true;
}

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// var checkInclusion = function(s1, s2) {
//     const lengthDiff = s2.length - s1.length;
//     if (lengthDiff < 0) return false;
  
//     let s1Letters = Array(26).fill(0);
//     let s2Letters = Array(26).fill(0);
//     let count = 0;
  
//     for (let i = 0; i < s1.length; i++) {
//       const currentS1LetterIndex = s1[i].codePointAt(0) - 97;
//       const currentS2LetterIndex = s2[i].codePointAt(0) - 97;
//       s1Letters[currentS1LetterIndex] += 1;
//       s2Letters[currentS2LetterIndex] += 1;
//     }
  
//     for (let i = 0; i < 26; i++) {
//       if (s1Letters[i] == s2Letters[i]) count++;
//     }
  
//     for (let i = 0; i < lengthDiff; i++) {
//       if (count === 26) return true;
  
//       const startLetterIndex = s2[i].codePointAt(0) - 97;
//       const endLetterIndex = s2[i + s1.length].codePointAt(0) - 97;
  
//       s2Letters[endLetterIndex] += 1;
  
//       if (s1Letters[endLetterIndex] === s2Letters[endLetterIndex]) {
//         count++;
//       } else if (s2Letters[endLetterIndex] === s1Letters[endLetterIndex] + 1) {
//         count--;
//       }
  
//       s2Letters[startLetterIndex] -= 1;
  
//       if (s1Letters[startLetterIndex] === s2Letters[startLetterIndex]) {
//         count++;
//       } else if (s2Letters[startLetterIndex] === s1Letters[startLetterIndex] - 1) {
//         count--;
//       }
//     }
  
//     return count === 26;
// };



// EX 1
// const s1 = "ab"; 
// const s2 = "eidbaooo";

const s1 = "adc"; 
const s2 = "dcda";

console.log('Value =>', checkInclusion(s1, s2));