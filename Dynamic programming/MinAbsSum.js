// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var i = 0;
    var j = 0;
    var max = 0;
    var total = 0;
    var target = 0;
    var dp = [];
    var count = [];
    var start = 0;
    var minDiff = Infinity;

    if(A.length === 0) {
        return 0;
    }

    A.sort(function(a, b) {
        return Math.abs(a)-Math.abs(b);
    });

    max = Math.abs(A[A.length - 1]);

    for(i=0; i<=max; i++) {
        count[i] = 0;
    }

    for(i=0; i<A.length; i++) {
        A[i] = Math.abs(A[i]);
        count[A[i]]++;
        total += A[i];
    }

    dp[0] = 0;
    for(i=1; i<=total; i++) {
        dp[i] = -1;
    }

    target = total / 2;

    for(i=0; i<count.length; i++) {
        if(count[i] > 0) {
            var step = i;
            for(j=0; j<dp.length; j++) {
                if(dp[j] >= 0) {
                    dp[j] = count[i];
                } else if(j >= step && dp[j - step] > 0) {
                    dp[j] = dp[j - step] - 1;
                }

                if(dp[j] >= 0) {
                    if(j === target) {
                        return 0;
                    } else {
                        minDiff = Math.min(minDiff, Math.abs(total - 2*j));
                    }
                }
            }
        }
    }

    return minDiff;
}
