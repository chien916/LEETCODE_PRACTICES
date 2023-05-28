/**
 * @param {number} length
 * @param {number[][]} updates
 * @return {number[]}
 */
var getModifiedArray = function (length, updates) {
    let _ret_A = [Array(length).fill(0), 0];//arr,ind
    let pq = new PriorityQueue({
        compare: (a_A, b_A) => a_A[1] - b_A[1]
    });
    updates.sort((a_A, b_A) => -(a_A[0] - b_A[0]));
    let currVal_n = 0;
    while (updates.length > 0) {
        if (pq.size() === 0) {
            currVal_n = updates[updates.length - 1][2];
            pq.enqueue(updates.pop());
        }
        while (updates.length > 0 && updates[updates.length - 1][0] <= pq.front()[1]) {
            currVal_n += pq.front()[2];
            for (let i_n = 0; i_n < pq.front()[2])
        }

    }

};


const { PriorityQueue } = require('@datastructures-js/priority-queue');
