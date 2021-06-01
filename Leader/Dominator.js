// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length == 0) {
        return -1;
    }
    var pos = 0;
    var count = 0;
    for (var i = 0; i < A.length; i++) {
        if (A[pos] == A[i]) {
            count++;
        } else {
            count--;
            if (count == 0) {
                pos = i;
                count++;
            }
        }
    }
    count = 0;
    var cand = A[pos];
    for (var i in A) {
        if (A[i] == cand) {
            count++;
        }
    }
    if (count <= A.length / 2) {
        return -1;
    }

    return pos;
}
