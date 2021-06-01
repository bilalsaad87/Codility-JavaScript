// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const N = A.length;

    let numCnt = new Array((N * 2)+1).fill(0);

    for(let i in A) {
        numCnt[A[i]]++;
    }

    let divCnt= [];

    for(let i = 0; i < N; i++) {
        let divisors = 0;

        for(let j = 1; j * j <= A[i]; j++) {
            if(A[i] % j === 0) {
                divisors += numCnt[j];

                if(A[i] / j !== j) {
                    divisors += numCnt[A[i]/j];
                }
            }
        }

        divCnt[i] = N - divisors;
    }

    return divCnt;
}
