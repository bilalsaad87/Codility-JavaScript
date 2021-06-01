// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, M) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(N === 1) {
        return 1;
    }

    if(M === 1) {
        return N;
    }

    return N / gcd(N, M);
}

function gcd(a, b) {
    if(a % b === 0) {
        return b;
    } else {
        return gcd(b, a % b);
    }
}
