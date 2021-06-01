// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var n = A.length;
    var dp = new Array(n);

    dp[0] = A[0];

    for (var i = 1; i < n; i++) {
        var max = dp[i - 1] + A[i];
        for (var j = 1; j <= 6; j++) {
            if (i - j >= 0) {
                max = Math.max(dp[i - j] + A[i], max);
            }
        }
        dp[i] = max;
    }
    
    return dp[n - 1];
}
