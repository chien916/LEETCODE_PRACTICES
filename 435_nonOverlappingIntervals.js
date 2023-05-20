/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    //use similar thoughts from 1235

    //sort the interval using start time
    intervals.sort((a_A, b_A) => (a_A[0] === b_A[0]) ? (a_A[1] - b_A[1]) : (a_A[0] - b_A[0]));

    //priority queue where earlier end time has higher priority
    //[end time,max count]
    let heap = new PriorityQueue({
        compare: (a_A, b_A) => a_A[0] - b_A[0]
    });

    let maxIntervalsCount_n = 0;

    for (let i_n = 0; i_n <= intervals.length; ++i_n) {
        while (!heap.isEmpty() && (i_n === intervals.length || intervals[i_n][0] >= heap.front()[0])) {
            maxIntervalsCount_n = Math.max(maxIntervalsCount_n, heap.dequeue()[1]);
        }
        if (i_n < intervals.length) heap.enqueue([intervals[i_n][1], maxIntervalsCount_n + 1]);
    }

    return intervals.length - maxIntervalsCount_n;
};

const {
    PriorityQueue,
} = require('@datastructures-js/priority-queue');

console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]]));