// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var counter = 0, j= 0;
    var lower = [];
    var upper = []

    for(var i=0; i < A.length; i++) {
    lower[i] =i-A[i];
    upper[i] =i+A[i];
    }

    lower.sort(sortAsc)
    upper.sort(sortAsc)

    for(var i= 0; i<A.length; i++) {
    while(j < A.length && upper[i] >= lower[j]){
        counter += j-i;
        j++;
    }
        if(counter > 10000000) return -1;
    }

    return counter;
}

function sortAsc(a, b) {
    return (a - b)
}
