let arr = [];
var MinStack = function () {
  arr = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  arr.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  console.log("PRE pop", arr);
  arr.pop();
  console.log("POST pop", arr);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return arr[arr.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return Math.min(...arr);
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
