// Option 1: Reverse a given string
const revString = (str) => {
  const arr = str.split("");
  arr.reverse();
  str = arr.join("");
  console.log(str);
};

revString("hello");

// Option 2: Reverse a given string
(function (str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  console.log({ reversed_string: reversed });
})("hello");
