/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function (startTime, endTime, profit) {
    //sort indices with ascending start time
    let inds_A = Array(startTime.length).fill().map((_, ind_n) => ind_n);
    inds_A.sort((a_n, b_n) => startTime[a_n] - startTime[b_n]);

    /**
     * heap -> small end time having higher priority
     * each element (a chain) in heap is [indOfLastJobInThisChain,currProfit] 
     */
    let heap = new PriorityQueue({
        compare: (a_A, b_A) => endTime[a_A[0]] - endTime[b_A[0]]
    });

    /**
     * Before appending a job to a chain, max profit of the chain is memorized.
     * 
     * For each iteration of a job, only the one with maximum profit is memorized.
     * 
     * The chain corresponding to this maximum profit is garunteed to has a end time
     * earlier than the current job's start time, as this maximum profit is the profit
     * prior to appeding the PREVIOUS job, and the PREVIOUS job is garanteed to has a
     * starting time earlier than the current job's starting time.
     */
    let prevMaxProfit_n = 0;

    //process
    for (let i_n = 0; i_n <= inds_A.length; ++i_n) {
        /**
         * From all eligable chains from heap to append, record the profit of the chain
         * of highest profit, so that job[i+1] can append itself to a chain excluding job[i]
         */
        while (!heap.isEmpty()
            && (i_n === inds_A.length || startTime[inds_A[i_n]] >= endTime[heap.front()[0]])) {
            prevMaxProfit_n = Math.max(prevMaxProfit_n, heap.dequeue()[1]);
        }
        if (i_n < inds_A.length) heap.enqueue([inds_A[i_n], prevMaxProfit_n + profit[inds_A[i_n]]]);
    }
    return prevMaxProfit_n;
};


const {
    PriorityQueue,
  } = require('@datastructures-js/priority-queue');

console.log(jobScheduling(
    [1,2,3,4,6], 
    [3,5,10,6,9], 
    [20,20,100,70,60]));