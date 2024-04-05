class Solution {
    strStr(haystack, needle) {
      if (needle === "") {
        return 0;
      }
      if (haystack.length < needle.length) {
        return -1;
      }
  
      for (let i = 0; i <= haystack.length - needle.length; i++) {
        let j;
        for (j = 0; j < needle.length; j++) {
          if (haystack[i + j] !== needle[j]) {
            break;
          }
        }
        if (j === needle.length) {
          return i;
        }
      }
      return -1;
    }
  }
  
  // Example usage
  const solution = new Solution();
  const haystack = "hello";
  const needle = "ll";
  
  console.log("Index:", solution.strStr(haystack, needle)); // Output should be 2
  