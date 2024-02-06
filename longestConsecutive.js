/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (!nums.length) return 0;

  const n = nums.length;

  nums.sort((a, b) => a - b);

  let count = 1;
  let maxSeq = 0;

  for (let i = 1; i < n; i++) {
    if (nums[i] !== nums[i - 1]) {
      if (nums[i] === nums[i - 1] + 1) {
        count++;
      } else {
        maxSeq = Math.max(maxSeq, count);
        count = 1;
      }
    }
  }

  return Math.max(maxSeq, count);
};

const nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums));
