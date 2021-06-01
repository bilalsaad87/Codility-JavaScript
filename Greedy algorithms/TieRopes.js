// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(K, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var i = 0;
    var count = 0;
    var size = 0;

    for(i=0; i<A.length; i++) {
        size += A[i];

        if(size >= K) {
            count++;
            size = 0;
        }
    }

    return count;
}
