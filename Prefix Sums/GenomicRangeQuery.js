// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    var dna = '';
	var ans = [];

	for (var i=0; i < P.length; i++) {
		dna = S.slice(P[i], Q[i] + 1);

		if (dna.indexOf('A') !== -1) {
			ans.push(1)
		} else if (dna.indexOf('C') !== -1) {
			ans.push(2)
		} else if (dna.indexOf('G') !== -1) {
			ans.push(3)
		} else {
			ans.push(4)
		}
	}

	return ans;
}
