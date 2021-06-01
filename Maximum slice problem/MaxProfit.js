// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length < 2) {
        return 0;
    }
    var msf = 0;
    var meh = 0;
    for (var i = 1; i < A.length; i++) {
        meh = Math.max(0, meh + A[i] - A[i - 1]);
        msf = Math.max(msf, meh);
    }
    return msf > 0 ? msf : 0;
}
