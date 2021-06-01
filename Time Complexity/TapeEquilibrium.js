// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var sumRight = A.reduce((pv, cv, idx) => (idx > 0) ? (pv + cv) : (0), 0);
    var sumLeft = 0;
    var substractions = [];
    var maxI = A.length - 1;

    for(var i = 0; i < maxI; i += 1){
        sumLeft += A[i];
        substractions.push(Math.abs(sumLeft - sumRight));
        if (i + 1 <= maxI) sumRight -= A[i + 1];
    }

    return substractions.reduce((pv, cv, idx) => (idx > 0) ? ((pv < cv)? pv : cv) : (cv), 0);
}
