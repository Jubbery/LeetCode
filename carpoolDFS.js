function solution(A, B) {
  const N = A.length;
  const tree = new Map();
  const depth = new Array(N + 1).fill(-1);
  const passengers = new Array(N + 1).fill(0);
  const carCapacity = 5;

  // Build the tree
  for (let i = 0; i < N; i++) {
    if (!tree.has(A[i])) tree.set(A[i], []);
    if (!tree.has(B[i])) tree.set(B[i], []);
    tree.get(A[i]).push(B[i]);
    tree.get(B[i]).push(A[i]);
  }

  // DFS to find depth of each junction
  function dfs(node, d) {
    depth[node] = d;
    passengers[node] = node === 0 ? 0 : 1; // No passenger at the office junction

    let totalPassengers = passengers[node];
    for (let neighbor of tree.get(node)) {
      if (depth[neighbor] === -1) {
        totalPassengers += dfs(neighbor, d + 1);
      }
    }
    if (node !== 0) {
      let carsNeeded = Math.ceil(totalPassengers / carCapacity);
      passengers[node] = carsNeeded * carCapacity; // Total capacity of cars from this junction
    }

    return totalPassengers;
  }
  dfs(0, 0);

  // Calculate fuel consumption
  let fuel = 0;
  for (let i = 1; i <= N; i++) {
    if (depth[i] > 0) {
      let carsLeaving = Math.ceil((passengers[i] - 1) / carCapacity);
      fuel += carsLeaving;
    }
  }

  return fuel;
}

// Test cases
console.log(solution([0, 1, 1], [1, 2, 3])); // Expected output: 3
console.log(solution([1, 1, 1, 9, 9, 9, 9, 7, 8], [2, 0, 3, 1, 6, 5, 4, 0, 0])); // Expected output: 10
