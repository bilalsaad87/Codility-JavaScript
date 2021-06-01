// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let N = A.length;
    let count = new Array(N+1).fill(0);
    for (let i = 0; i< N; i++) {
        count[A[i]-1] = 1;
    }
    //add 1 because the array starts at 1
    return(count.indexOf(0)+1)
}
