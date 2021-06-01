// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort((a, b) => (a - b))

    for (var i = 0; i < A.length - 2; i++) {
        var p = A[i],
            q = A[i + 1],
            r = A[i + 2]

        if (p + q > r &&
            q + r > p &&
            r + p > q)
            return 1
    }

    return 0
}
