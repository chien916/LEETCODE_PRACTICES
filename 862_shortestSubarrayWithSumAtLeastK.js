/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function (nums, k) {
    let heap = new PriorityQueue({
        //[length of chain,sum]
        compare: (pairA_A, pairB_A) => pairA_A[1] - pairB_A[1]
    });
    let currMinCount_n = Number.MAX_SAFE_INTEGER;
    for (let i_n = 0; i_n < nums.length; ++i_n) {
        if (nums[i_n] >= k) return 1;
        //subarray by appending the current element
        let currHeapElems_A = [];
        for (; !heap.isEmpty();) {
            let currPair_A = heap.dequeue();
            currPair_A[0] += 1;
            currPair_A[1] += nums[i_n];
            if (currPair_A[1] < k) currHeapElems_A.push(currPair_A);
            else currMinCount_n = Math.min(currMinCount_n, currPair_A[0]);
        }
        for (let it_A of currHeapElems_A) heap.enqueue(it_A);
        //subarray with the current element it self
        heap.enqueue([1, nums[i_n]]);
    }
    if (currMinCount_n === Number.MAX_SAFE_INTEGER) return -1;
    else return currMinCount_n;
};

const {
    PriorityQueue,
} = require('@datastructures-js/priority-queue');

console.log(shortestSubarray([-28, 81, -20, 28, -29], 89))