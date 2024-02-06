/**
 * @param {string} expression
 * @return {number}
 */
exports.calculate = function (expression) {
  // Split expression to char[] and reverse to use as stack.
  const tokens = expression.split(" ").reverse();

  // Hashmap storing the respective operation for a operator (key)
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  // Parse the expression recursively to evaluate alternative notation.
  const parseAltNotation = (tokens) => {
    // Pop token from stack;
    const token = tokens.pop();

    // Check if token is a number and return it if so.
    if (!isNaN(token)) {
      return parseFloat(token);
    }

    // Get next two tokens for expression.
    const a = parseAltNotation(tokens);
    const b = parseAltNotation(tokens);

    // Return the result of operation from hashmap.
    return operations[token](a, b);
  };

  // Return the result of parsed expression.
  return parseAltNotation(tokens);
};
