// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var j;
    var i;
    var len = A.length;
    var lastMax = 0;
    var max = 0;
    var counters = new Array (N);
    for(j = 0; j < N; j++) counters[j] = 0;
    var n1 = N + 1;

    for(j=0; j < len; j++){
        if(A[j] < n1){
            i = A[j] - 1;
            if (counters[i] < lastMax) counters[i] = lastMax;
            counters[i]++;
            if (max < counters[i]) max = counters[i];
        } else {
            lastMax = max;
        }
    }

    for(j = 0; j < N; j++){
      if (counters[j] < lastMax) counters[j] = lastMax;
    }

    return counters;
}
