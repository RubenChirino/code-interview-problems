function getAllPermutations(str, target) {
  const res = [];
  const len = str.length;
  const tarLen = target.length;
  for (let i = 0; i <= (len - tarLen); i++) {
    if (!target.includes(str[i])) continue;
    if (isPermutation(str.slice(i, i + tarLen), target)) res.push([i, i + tarLen]);
  }
  return res.length;
}

function isPermutation(w1, w2) {
  const w2ToArr = w2.split('');
  for (let i = 0; i < w1.length; i++) {
    const index = w2ToArr.findIndex((w) => w === w1[i]);
    if (index === -1) return false;
    w2ToArr[index] = '-';
  }
  return true;
}

const str = 'cbabadcbbabbcbabaabccbabc';
const target = 'abbc';
console.log('Value =>', getAllPermutations(str, target)); // 7
