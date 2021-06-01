// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
   var positives = [];
    var negatives = [];
    var i = 0;
    var min = 0;

    var start = 0;
    var end = 0;

    if(A.length === 1) {
        return Math.abs(A[0] + A[0]);
    }

    A.sort(function(a, b) {
        return a-b;
    });

    for(i=0; i<A.length; i++) {
        if(A[i] < 0) {
            negatives.push(A[i]);
        } else {
            positives.push(A[i]);
        }
    }

    negatives.sort(function(a, b) {
        return b-a;
    });

    if(positives.length === 0) {
        return Math.abs(2 * negatives[0]);
    }

    if(negatives.length === 0) {
        return 2 * positives[0];
    }

    if(positives[0] === 0) {
        return 0;
    }

    min = positives[0]*2;

    for(i=0; i<negatives.length; i++) {
        start = 0;
        end = positives.length-1;
        var neg = A[i];

        while(start <= end) {
            var mid = parseInt((start + end) / 2);
            var pos = positives[mid];
            var sum = Math.abs(neg + pos);

            if(min > sum) min = sum;

            if(pos > Math.abs(neg)) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
    }

    return min;
}
