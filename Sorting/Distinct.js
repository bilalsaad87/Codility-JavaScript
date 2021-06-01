// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var map = {}
    for (var i in A) {
        if (!map[A[i]]) {
            map[A[i]] = true
        }
    }
    return Object.keys(map).length
}
