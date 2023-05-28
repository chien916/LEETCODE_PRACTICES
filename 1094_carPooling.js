/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
    let pq = new PriorityQueue({
        compare: (a_A, b_A) => a_A[2] - b_A[2]
    })
    let count_n = 0;
    trips.sort((a_A, b_A) => -(a_A[1] - b_A[1]));
    while (trips.length > 0) {
        if (pq.size() === 0) {
            count_n += trips[trips.length - 1][0];
            pq.enqueue(trips.pop());
        }
        while (trips.length > 0 && trips[trips.length - 1][1] < pq.front()[2]) {
            count_n += trips[trips.length - 1][0];
            pq.enqueue(trips.pop());
        }
        if (count_n > capacity) return false;
        count_n -= pq.dequeue()[0];
    }
    return true;
};

const { PriorityQueue } = require('@datastructures-js/priority-queue');

console.log(carPooling([[9,0,1],[3,3,7]],4))