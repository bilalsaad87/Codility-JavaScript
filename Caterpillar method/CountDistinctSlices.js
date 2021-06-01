// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(M, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const LIMIT = 1000000000;

    var lastPos = [];
    var i = 0;
    var count = 0;
    var start = 0;

    if(A.length === 1) {
        return 1;
    }

    for(i=0; i<=M; i++) {
        lastPos[i] = -1;
    }

    for(i=0; i<A.length; i++) {
        var item = A[i];

        if(lastPos[item] + 1 > start) {
            start = lastPos[item] + 1;
        }

        lastPos[item] = i;
        count += i - start + 1;

        if(count > LIMIT) break;
    }

    return count > LIMIT ? LIMIT : count;
}
