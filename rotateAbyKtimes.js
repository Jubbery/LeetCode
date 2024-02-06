function cyclicRotations(A, K) {
  // Implement your solution here
  let N = A.length;

  if (N === 0 || K % N === 0) return A;

  let numRotate = K % N;

  let rotArr = A.slice(-numRotate).concat(A.slice(0, N - numRotate));

  return rotArr;
}

// Example usage
console.log(cyclicRotations([3, 8, 9, 7, 6], 3)); // Output: [9, 7, 6, 3, 8]
console.log(cyclicRotations([0, 0, 0], 1)); // Output: [0, 0, 0]
console.log(cyclicRotations([1, 2, 3, 4], 4)); // Output: [1, 2, 3, 4]
