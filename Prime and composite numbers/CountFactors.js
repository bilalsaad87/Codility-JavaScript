// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
  var i;
	var NumFactors = 0;

	for(i = 1; i * i < N; i++) {
		if(N % i == 0) NumFactors += 2;
	}

	if(i * i == N) NumFactors++;

	return NumFactors
}
