// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    var f = new Array(A.length+1);
    f[0] = 1;
    f[1] = 1;
    var MAX = 1<<30;

    for (var i = 2; i < f.length; ++i) {
        f[i] = f[i-1] + f[i-2];
        f[i] = f[i] % MAX;
    }

    var res = new Array(A.length);

    for (var i = 0; i < A.length; ++i) {
        res[i] = f[A[i]] % (1 << B[i]);
    }

    return res;
}
