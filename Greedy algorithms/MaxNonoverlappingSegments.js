// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    var i = 0;
    var count = 1;
    var last = 0;

    if(A.length === 0) {
        return 0;
    }

    last = B[0];

    for(i=1; i<A.length; i++) {
        if(A[i] > last) {
            count++;
            last = B[i];
        }
    }

    return count;
}
