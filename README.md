# Infix To Postfix Converter (Infix2Postfix)

This is a simple infix to postfix converter written in JavaScript.

It is a simple project that I made to show other students how they can easily design this type of program and how they can use it to solve their problems.

## How to use

1. Clone the repository
2. Enter your infix expression in the `example.js` file
2. Run `example.js` in your terminal
3. You will get the postfix expression as output

## Example

```js
convert_infix_to_postfix("5 + 6 * 7")
// [ '5', '6', '7', '*', '+' ]
convert_infix_to_postfix("(((a/b)-c) + (d*e))- (a*c)")
// [
//   'a', 'b', '/', 'c',
//   '-', 'd', 'e', '*',
//   '+', 'a', 'c', '*',
//   '-'
// ]
convert_infix_to_postfix("(k+l)-(m*n)+(o^p)*w/v/u*t+q")
// [
//   'k', 'l', '+', 'm', 'n',
//   '*', '-', 'o', 'p', '^',
//   'w', '*', 'v', '/', 'u',
//   '/', 't', '*', '+', 'q',
//   '+'
// ]
```

© Copyright (c) 2022 Max Base
