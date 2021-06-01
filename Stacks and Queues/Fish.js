// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    var downStream = [];
    var upStream = [];
    var direction;

    for (var i = 0; i < A.length; i++) {
        direction = B[i];

        if (direction === 0) {
            while (downStream.length > 0) {
                var d = downStream.pop();

                if (d > A[i]) {
                    downStream.push(d);
                    break;
                }
            }

            if (downStream.length === 0) {
                upStream.push(A[i]);
            }
        } else {
            downStream.push(A[i]);
        }
    }

    return downStream.length + upStream.length;
}
