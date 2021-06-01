// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    var offset = A % K === 0 ? 1 : 0;
    return parseInt(B / K) - parseInt(A / K) + offset;
}
