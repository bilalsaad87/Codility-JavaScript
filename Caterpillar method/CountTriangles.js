// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var start = 0;
    var mid = 1;
    var end = 2;
    var count = 0;

    if(A.length < 3) {
        return 0;
    }

    A.sort(function(a, b) {
        return a-b;
    });

    for(start=0; start<A.length-2; start++) {
        for(mid = start+1; mid<A.length-1; mid++) {
            end = mid+1;

            while(end < A.length && check(A, start, mid, end)) {
                end++;
            }

            count += end - mid - 1;
        }
    }

    return count;
}

function check(arr, base, mid, end) {
    if(arr[base] + arr[mid] > arr[end]) return true;

    return false;
}
