/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {
    let cache_A = [1];//1 is defined as ugly number as exceptions
    let pq = new PriorityQueue({
        compare: (a_A, b_A) => {
            let diff_n = cache_A[a_A[1]] * a_A[0] - cache_A[b_A[1]] * b_A[0];
            if (diff_n === 0) diff_n = a_A[0] - b_A[0];
            return diff_n;
        }
    });
    for (let n of primes) {
        pq.enqueue([n, 0]);
    }
    while (cache_A.length < n) {
        let curr_A = pq.dequeue();
        let currUglyNumber_n = curr_A[0] * cache_A[curr_A[1]];
        if (currUglyNumber_n !== cache_A[cache_A.length - 1]) cache_A.push(currUglyNumber_n);
        ++curr_A[1];
        pq.enqueue(curr_A);//queue it back
    }
    return cache_A[cache_A.length - 1];
};

const {
    PriorityQueue,
    MinPriorityQueue,
    MaxPriorityQueue
} = require('@datastructures-js/priority-queue');

console.log(nthSuperUglyNumber(12, [2, 7, 13, 19]))