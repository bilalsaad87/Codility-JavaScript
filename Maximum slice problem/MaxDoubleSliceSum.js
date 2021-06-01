// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var sumsL = A.map(i => 0);
    var sumsR = A.map(i => 0);

    for (var iL = 1, iR = A.length-2; iR >= 2; iL++, iR--) {
        sumsL[iL] = Math.max(0, sumsL[iL-1] + A[iL]);
        sumsR[iR] = Math.max(0, sumsR[iR+1] + A[iR]);
    }

    var max = sumsL[0] + sumsR[2];

    for (var i = 2; i < A.length-1; i++) {
        max = Math.max(max, sumsL[i-1] + sumsR[i+1]);
    }

    return max;
}
