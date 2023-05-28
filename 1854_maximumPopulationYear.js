/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function (logs) {
    let pq = new PriorityQueue({
        compare: (a_A, b_A) => a_A[1] - b_A[1]
    });
    logs.sort((a_A, b_A) => -(a_A[0] - b_A[0]));
    //logs.forEach((it_A) => pq.enqueue(it_A));
    let _ret_A = [logs[logs.length-1][0], 1];//year,population
    while (logs.length > 0) {
        if (pq.isEmpty()) pq.enqueue(logs.pop());
        let lastBirth_n = null;
        while (logs.length > 0 && logs[logs.length - 1][0] < pq.front()[1]) {
            lastBirth_n = logs[logs.length - 1][0];
            pq.enqueue(logs.pop());
        }
        if (pq.size() > _ret_A[1]) _ret_A = [lastBirth_n, pq.size()];
        pq.dequeue();
    }
    return _ret_A[0];
};


const { PriorityQueue } = require('@datastructures-js/priority-queue');

console.log(maximumPopulation([[2008,2026],[2004,2008],[2034,2035],[1999,2050],[2049,2050],[2011,2035],[1966,2033],[2044,2049]]));



