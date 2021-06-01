// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    for (var i = parseInt(Math.sqrt(N), 10); true ; i--)
        if (N % i == 0)
            return 2 * i + 2 * (N / i);
}
