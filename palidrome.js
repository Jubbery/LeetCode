// Solves palindrome problem
const Palindrome = (str) => {
  let isPalindrome = str.split("").reverse().join("");
  return isPalindrome === str;
};

// Other way of doing this
const stringToCheck = "abba";

(function (str) {
  let reversed = "";
  for (let x of str) {
    reversed = x + reversed;
  }
  console.log(reversed === str);
  return reversed === str;
})(stringToCheck);
