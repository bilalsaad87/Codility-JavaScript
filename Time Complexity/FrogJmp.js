// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (X >= Y) {
        return 0
    } else if (X === Y) {
        return 0
    } else if (D >= (Y-X)) {
        return 1
    } else {
        minimalJumps = parseInt((Y-X) / D)
        minimalJumps += ((Y-X)%D > 0 ? 1 : 0)
        return minimalJumps
    }
}
