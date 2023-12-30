/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let sT = s.split("").sort().join("");
  let tT = t.split("").sort().join("");

  return sT === tT ? true : false;
};
