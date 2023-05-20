/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
    //use similar thoughts from 1235
    pairs.sort((a_A, b_A) =>
        a_A[0] === b_A[0] ? a_A[1] - b_A[1] : a_A[0] - b_A[0]
    );
    let heap = new PriorityQueue({
        //[end time,#pairs in chain]
        compare: (a_A, b_A) => a_A[0] - b_A[0]
    });
    let maxCount_n = 0;
    for (let i_n = 0; i_n <= pairs.length; ++i_n) {
        while (!heap.isEmpty()
            && (i_n === pairs.length || pairs[i_n][0] > heap.front()[0])) {
            maxCount_n = Math.max(maxCount_n, heap.dequeue()[1]);
        }
        if (i_n < pairs.length) heap.enqueue([pairs[i_n][1], maxCount_n + 1]);

    }

    return maxCount_n;
};

const {
    PriorityQueue,
} = require('@datastructures-js/priority-queue');