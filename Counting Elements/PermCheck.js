// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
  var L = A.length;
  var X = ((L + 1) * L) / 2;
  var Y = 0;
  var I = 0;
  var F = [];
  var V = -1;

  while (I < L) {
    V = A[I];
    I++;
    if (F[V]) continue;
    F[V] = true;
    Y += V;
  }

  return X === Y ? 1 : 0;
}
