// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const divisors = A.map(e => 0);

    for (let i = 0; i<A.length; i++) {
        let e = A[i];
        for (let j = i+1; j<A.length; j++) {
            let f = A[j];
            if (f % e === 0) {
                divisors[j]++;
            }
            if (e % f === 0) {
                divisors[i]++;
            }
        }
    }

    const res = divisors.map(e => A.length - e - 1);
    return res;
}
