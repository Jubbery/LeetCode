function myAtoi(s) {
  s = s.toLowerCase();
  var sign = s.includes("-") ? -1 : 1;
  s = s.replace(/[^a-z0-9.]/g, "");
  console.log(s);
  let res = parseInt(s) * sign;
  return parseInt(s) * sign;
}
console.log(myAtoi("    -42 with Words"));
console.log(myAtoi("with Words -42"));
