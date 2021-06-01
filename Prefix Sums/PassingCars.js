// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var result = 0;
    var aLen = A.length;
    var zeroFactor = 0;

    for (var i = 0; i < aLen; i++){
        if (A[i] == 0){
            zeroFactor += 1;
        }
        if (A[i] == 1){
            result += zeroFactor * 1;
            if (result > 1000000000){
                result = -1;
                break;
            }
        }
    }

    return result;
}
