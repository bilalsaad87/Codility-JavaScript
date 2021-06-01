// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var n = A.length;
    var peaks = [];

    for (var i = 1; i < n - 1; i++) {
        if (A[i - 1] < A[i] && A[i] > A[i + 1]) {
            peaks.push(i);
        }
    }

    var max = 0;

    for (var i = 1; i < n; i++) {
        if ((n % i) == 0) {
            var bi = 0;
            var block = n / i;
            for (var ind in peaks) {
            	var p = peaks[ind]
                if (bi * block <= p && p < (bi + 1) * block) {
                    bi++;
                }
            }
            if (bi == i) {
                max = i;
            }
        }
    }

    return max;
}
