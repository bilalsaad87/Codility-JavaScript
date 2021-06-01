// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length === 1) {
        if (A[0] === 1 && X === 1) return 0;
        else return -1;
    }

    var i = -1,
    sum = 0,
    Y = (X * (X+1)) / 2,
    f = [];
    
    do {
        i++;
        if (f[A[i]]) continue;
        f[A[i]] = true;
        sum += A[i];
        if (sum === Y) break;
    }  while (i < A.length)

    if (i === A.length) return -1;

    return i;
}
