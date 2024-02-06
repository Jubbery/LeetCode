function myAtoi(s: string): number {
  let x = s.toLowerCase().split("");

  let sign = s.includes("-") ? -1 : 1;
  s = s.replace(/[^a-z0-9.]/g, "");
  s;
  console.log(s);
  s.substring(0, s.indexOf(" "));
  s.trimStart().trimEnd().split(" ").reverse();
  return parseInt(s) * sign;
}

console.log(myAtoi("    -42 with Words"));
console.log(myAtoi("with Words -42"));
