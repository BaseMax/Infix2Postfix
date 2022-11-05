const convert_infix_to_postfix = require('./Infix2Postfix.js');

// Example
console.log(convert_infix_to_postfix("5 + 6 * 7"));
// [ '5', '6', '7', '*', '+' ]
console.log(convert_infix_to_postfix("(((a/b)-c) + (d*e))- (a*c)"));
// [
//   'a', 'b', '/', 'c',
//   '-', 'd', 'e', '*',
//   '+', 'a', 'c', '*',
//   '-'
// ]
console.log(convert_infix_to_postfix("(k+l)-(m*n)+(o^p)*w/v/u*t+q"));
// [
//   'k', 'l', '+', 'm', 'n',
//   '*', '-', 'o', 'p', '^',
//   'w', '*', 'v', '/', 'u',
//   '/', 't', '*', '+', 'q',
//   '+'
// ]
