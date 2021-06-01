// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    var m = P.length;
    var M = P.map(i => 0);

    var f = getArray(N + 1);
    var i = 2;

    while (i * i <= N) {
        if (f[i] == 0) {
            var k = i * i;
            while (k <= N) {
                if (f[k] == 0) {
                    f[k] = i;
                }
                k += i;
            }
        }
        i++;
    }

    var semi =  getArray(N + 1);
    var sum = 0;
    for (var k = 1; k <= N; k++) {
        if (f[k] != 0) {
            var b = k / f[k];
            if (f[b] == 0) {
                sum++;
            }
        }
        semi[k] = sum;
    }

    for (var mi = 0; mi < m; mi++) {
        var p = P[mi];
        var q = Q[mi];
        M[mi] = semi[q] - semi[p - 1];
    }
    return M;
}

function getArray(N) {
    var A = [];
    for (var i = 0; i < N; i++) {
        A.push(0)
    }
    return A;
}
