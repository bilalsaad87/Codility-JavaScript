// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var f = new Array(30);
    f[0] = 1; f[1] = 2;
    for (var i = 2; i < f.length; ++i) f[i] = f[i-1] + f[i-2];
    var mins = new Array(A.length+1);

    for (var i = 0; i < mins.length; ++i) {
        if (i < A.length && A[i] == 0) {
            mins[i] = -1;
            continue;
        }
        var min = Number.MAX_SAFE_INTEGER;

        for (var j = f.length-1; j >= 0; --j) {
            var k = i - f[j];
            if (k < -1) continue;
            if (k == -1) {
                min = 1;
                break;
            }
            if (mins[k] < 0) continue;
            var newMin = mins[k] + 1;
            if (newMin < min) min = newMin;
        }
        if (min != Number.MAX_SAFE_INTEGER) mins[i] = min;
        else mins[i] = -1;
    }

    return mins[A.length];
}
