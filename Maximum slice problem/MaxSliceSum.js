// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var meh = -2147483648;
    var msf = -2147483648;
    for (var ind in A) {
    	var i = A[ind]
        meh = Math.max(i, meh + i);
        msf = Math.max(msf, meh);
    }
    return parseInt(msf, 10);
}
