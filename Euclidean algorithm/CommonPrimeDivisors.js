// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    var count = 0;
    var i = 0;

    for(i=0; i<A.length; i++) {
        var big = Math.max(A[i], B[i]);
        var small = Math.min(A[i], B[i]);
        var div = gcd(big, small);

        if(big === small) {
            count++;
        } else if(check(big, div) && check(small, div)) {
            count++;
        }
    }

    return count;
}

function gcd(a, b) {
    if(a % b === 0) {
        return b;
    } else {
        return gcd(b, a % b);
    }
}

function check(a, b) {
    var gcdA = gcd(a, b);

    if(gcdA === a) {
        return true;
    } else if(gcdA === 1) {
        return false;
    } else {
        a /= gcdA;
        gcdA = gcd(a, gcdA);
        return check(Math.max(a, gcdA), Math.min(a, gcdA));
    }
}
