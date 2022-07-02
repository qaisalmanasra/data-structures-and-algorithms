'use strict';
const Stack = require('../stack-and-queue/stack/lib/stack');
function validateBrackets(string) {
  const stack = new Stack();
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(' || string[i] === '[' || string[i] === '{') {
      stack.push(string[i]);
    } else if (string[i] === ')' || string[i] === ']' || string[i] === '}') {
      const bracket = stack.peek();
      if (
        (bracket === '(' && string[i] === ')') ||
        (bracket === '[' && string[i] === ']') ||
        (bracket === '{' && string[i] === '}')
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.isEmpty()) {
    return true;
  }
}
module.exports = validateBrackets;
