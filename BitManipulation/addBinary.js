class BinaryAdder {
    addBinaryStrings(binary1, binary2) {
      let length1 = binary1.length, length2 = binary2.length;
      // Ensure binary1 is the longer string
      if (length1 < length2) return this.addBinaryStrings(binary2, binary1);
  
      let resultBuilder = [];
      let carry = 0, index2 = length2 - 1;
  
      for (let index1 = length1 - 1; index1 > -1; --index1) {
        if (binary1.charAt(index1) === '1') ++carry;
        if (index2 > -1 && binary2.charAt(index2--) === '1') ++carry;
  
        resultBuilder.push(carry % 2 === 1 ? '1' : '0');
        carry = Math.floor(carry / 2);
      }
      if (carry === 1) resultBuilder.push('1');
      resultBuilder.reverse();
  
      return resultBuilder.join('');
    }
  }
  
  // Example usage
  const binaryAdder = new BinaryAdder();
  const binaryNumber1 = "1010"; // equivalent to 10 in decimal
  const binaryNumber2 = "1101"; // equivalent to 13 in decimal
  
  console.log("Sum of binary numbers:", binaryAdder.addBinaryStrings(binaryNumber1, binaryNumber2));
  // Output should be "10111", equivalent to 23 in decimal
  