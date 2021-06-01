// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let result = 0;

    for (let element of A) {
        // Apply Bitwise XOR to the current and next element
        result ^= element
    }

    return result
}
