// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var F = [];
    var I = 0, V = 0;
    while (I < A.length) {
        V = A[I];
        I++;
        if (F[V]) continue;
        F[V] = true;
    }

    I = 0;

    do {
        I++;
    } while (F[I])

    return I;
}
