/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  answer = nums;

  let x = 1;

  nums.forEach((num) => {
    x = x * num;
  });

  answer.forEach((num, i) => {
    answer[i] = x / answer[i];
  });

  return answer;
};
