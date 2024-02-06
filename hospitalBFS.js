/**
 * @param {number} N The number of nodes.
 * @param {number[]} A Array representing one end of the streets.
 * @param {number[]} B Array representing the other end of the streets.
 * @param {number[]} H Array of hospitals' locations.
 * @return {number}
 */
function solution(N, A, B, H) {
  // Create a graph as an adjacency list
  const graph = Array.from({ length: N }, () => []);
  A.forEach((a, index) => {
    graph[a].push(B[index]);
    graph[B[index]].push(a);
  });

  // Initialize all distances as Infinity
  const distances = new Array(N).fill(Infinity);

  // Queue for Breadth-First Search (BFS)
  const queue = [];

  // Set distances to 0 for all hospital locations and add them to the queue
  H.forEach((hospital) => {
    distances[hospital] = 0;
    queue.push(hospital);
  });

  // Perform BFS from each hospital to calculate minimum distances to each node
  while (queue.length > 0) {
    const current = queue.shift();
    graph[current].forEach((neighbor) => {
      if (distances[neighbor] === Infinity) {
        distances[neighbor] = distances[current] + 1;
        queue.push(neighbor);
      }
    });
  }

  // Check if there are nodes that are unreachable (still have Infinity as their distance)
  if (distances.includes(Infinity)) {
    return -1;
  }

  // Return the maximum distance from a node to its nearest hospital
  return Math.max(...distances);
}

// Example usage:
console.log(solution(6, [0, 1, 1, 3, 0], [1, 2, 3, 4, 5], [2, 4])); // Expected output: 3
console.log(solution(6, [0, 1, 1, 3, 0, 4], [1, 2, 3, 4, 5, 5], [2, 4])); // Expected output: 2
console.log(solution(6, [0, 1, 1, 3], [1, 2, 3, 4], [2, 4])); // Expected output: -1
console.log(solution(3, [1], [2], [0, 1, 2])); // Expected output: 0
