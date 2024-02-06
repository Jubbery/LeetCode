/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const mapping = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const openingBrackets = {
    "(": true,
    "{": true,
    "[": true,
  };

  for (let char of s) {
    if (openingBrackets[char]) {
      stack.push(char);
    } else {
      if (stack.length === 0 || mapping[char] !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

var MinStack = function () {
  return new Array();
};
