// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    var brackets = {
        "{": "}",
        "(": ")",
        "[": "]"
    }

    var closedBrackets = ["}", ")", "]"]

    var stack = [];

    for (var i =0; i < S.length; i++) {
        if (brackets.hasOwnProperty(S[i])) {
            stack.push(S[i])
        } else if (brackets[stack[stack.length -1]] == S[i]) {
            stack.pop()
        } else if (closedBrackets.indexOf(S[i]) !== -1) {
        	return 0
        }
    }

    return stack.length === 0 ? 1 : 0
}
