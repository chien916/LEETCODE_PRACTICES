/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    //index of bigger num has higher priority
    let heap = new PriorityQueue({
        compare: (indA_n, indB_n) => -(nums[indA_n] - nums[indB_n])
    })

    //heap initialization
    for (let [i_n, maxInd_n] = [0, 0]; i_n < k - 1/*!1*/; ++i_n) {
        heap.enqueue(i_n);
    }

    let _ret_A = [];
    //sliding window
    for (let i_n = k - 1; i_n < nums.length; ++i_n) {
        while (!heap.isEmpty()
            //equal sign here bc we'll agree use the later element
            && (nums[i_n] >= nums[heap.front()]
                || heap.front() <= i_n - k)) {
            heap.dequeue();
        }
        heap.enqueue(i_n);
        _ret_A.push(nums[heap.front()]);
    }

    return _ret_A;
};

const {
    PriorityQueue,
} = require('@datastructures-js/priority-queue');

console.log(maxSlidingWindow([7, 2, 4], 2));