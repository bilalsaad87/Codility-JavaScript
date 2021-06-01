// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length === K || K === 0) {
        return A
    }

    for (let i = 0; i < K; i++) {
        let lastElement = A[A.length - 1]
        A.unshift(lastElement)
        A.pop()
    }
    return A
}
