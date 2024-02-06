/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;
  const rightProducts = new Array(n);

  let leftProduct = 1;
  let rightProduct = 1;

  for (let j = n - 1; j >= 0; j--) {
    rightProducts[j] = rightProduct;
    rightProduct *= nums[j];
  }

  let ret;
  return nums.map((num, i) => {
    ret = leftProduct * rightProducts[i];
    leftProduct *= num;
    return ret;
  });
};

console.log(productExceptSelf([1, 2, 3, 4]));
// Expected: [24,12,8,6]

console.log(productExceptSelf([-1, 1, 0, -3, 3]));
// Expected: [0,0,9,0,0]
