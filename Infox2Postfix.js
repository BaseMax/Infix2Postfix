/*
 * @Name: Infox2Postfix Evaluator JS
 * @Author: Max Base
 * @Date: 2022-11-05
 * @Repository: https://githun.com/basemax/Infox2Postfix
 */

const convert_infix_to_postfix = (infix) => {
    // Const Variables
    const operators = {
        "^": 4,
        "*": 3,
        "/": 3,
        "%": 3,
        "+": 2,
        "-": 2,
        "(": 1,
        ")": 1
    };

    // Variables
    let stack = [];
    let postfix = [];

    // Functions
    let is_operator = (c) => c in operators;
    let is_digit = (c) => c >= '0' && c <= '9';
    let is_identifier = (c) => (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
    let is_space = (c) => c == ' ';
    let is_left_parenthesis = (c) => c == '(';
    let is_right_parenthesis = (c) => c == ')';
    let is_left_associative = (c) => c == '+' || c == '-' || c == '*' || c == '/' || c == '%';
    let is_right_associative = (c) => c == '^';
    let is_associative = (c) => is_left_associative(c) || is_right_associative(c);
    let is_higher_precedence = (c1, c2) => {
        if (is_left_associative(c1) && operators[c1] == operators[c2]) return true;
        return operators[c1] > operators[c2];
    };

    // Main Body
    for (let i = 0; i < infix.length; i++) {
        let c = infix[i];
        if (is_digit(c)) {
            let number = c;
            while (i + 1 < infix.length && is_digit(infix[i + 1])) {
                number += infix[i + 1];
                i++;
            }
            postfix.push(number);
        } else if (is_identifier(c)) {
            let identifier = c;
            while (i + 1 < infix.length && is_identifier(infix[i + 1])) {
                identifier += infix[i + 1];
                i++;
            }
            postfix.push(identifier);
        } else if (is_space(c)) {
            continue;
        } else if (is_operator(c)) {
            if (is_left_parenthesis(c)) {
                stack.push(c);
            } else if (is_right_parenthesis(c)) {
                while (stack.length > 0 && !is_left_parenthesis(stack[stack.length - 1])) {
                    postfix.push(stack.pop());
                }
                stack.pop();
            } else {
                while (stack.length > 0 && is_associative(c) && is_higher_precedence(stack[stack.length - 1], c)) {
                    postfix.push(stack.pop());
                }
                stack.push(c);
            }
        }
    }

    while (stack.length > 0) postfix.push(stack.pop());

    return postfix;
};

// Example
console.log(convert_infix_to_postfix("5 + 6 * 7"));
console.log(convert_infix_to_postfix("(((a/b)-c) + (d*e))- (a*c)"));
console.log(convert_infix_to_postfix("(k+l)-(m*n)+(o^p)*w/v/u*t+q"));
