function binaryGap(N) {
  // Convert the number to its binary representation as a string
  let binary = N.toString(2);

  // Initialize the maximum gap length and the current gap length
  let maxGap = 0;
  let currentGap = 0;

  // Iterate over the binary string
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "0") {
      // If the current character is '0', increment the current gap length
      currentGap++;
    } else {
      // If the current character is '1', update the maximum gap and reset the current gap
      maxGap = Math.max(maxGap, currentGap);
      currentGap = 0;
    }
  }

  // Return the maximum gap found
  return maxGap;
}

// Example usage
console.log(binaryGap(9)); // Output: 2
console.log(binaryGap(529)); // Output: 4
console.log(binaryGap(20)); // Output: 1
console.log(binaryGap(15)); // Output: 0
