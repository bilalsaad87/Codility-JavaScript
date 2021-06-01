// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(K, M, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var sum = 0;
    var min = 0;
    var max = 0;
    var mid = 0;
    var i = 0;

    for(i=0; i<A.length; i++) {
        max += A[i];
        min = Math.max(min, A[i]);
    }

    if(K === 1) {
        return max;
    } else if(K >= A.length) {
        return min;
    }

    while(min <= max) {
        var temp = mid;
        mid = parseInt((max + min) / 2);

        if(mid === temp) {
            break;
        }

        var blocks = neededBlocks(A, mid);

        if(blocks > K) {
            min = mid+1;
        } else {
            max = mid;
        }
    }

    return max;
}

function neededBlocks(arr, maxValue) {
    var count = 1;
    var sum = arr[0];

    for(var j=1; j<arr.length; j++) {
        if(sum + arr[j] > maxValue) {
            sum = arr[j];
            count++;
        } else {
            sum += arr[j];
        }
    }

    return count;
}
