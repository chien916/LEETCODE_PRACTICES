
const { PriorityQueue} = require('@datastructures-js/priority-queue');

/**
 * @param {number[][]} lights
 * @return {number}
 */
var brightestPosition = function (lights) {
    /**
     * error 1:
     * initial trivial solution should be outside of loop,
     * as the smallest solution among the same value is preferred.
     * 
     * otherwise the biggest trivial solution will be returned
     */
    //pq sorted by string position
    let pq1 = new PriorityQueue({ compare: (a_A, b_A) => a_A[0] - b_A[0] });
    let pq2 = new PriorityQueue({ compare: (a_A, b_A) => a_A[1] - b_A[1] });
    lights.forEach((it_n) => pq1.enqueue([it_n[0] - it_n[1],it_n[0] + it_n[1]]));
    let _ret_A = [1, pq1.front()[0]];//sum,pos
    while (!pq1.isEmpty()) {
        //fill an element from pq1 to pq 2 is pq2 is empty
        if (pq2.isEmpty()) {
            //_ret_A = [1, pq1.front()[0]];//!error 1
            pq2.enqueue(pq1.dequeue());
        }
        //pop elem from pq1 to pq2 as long as pq2.front[1] is bigger than pq1.front[1]
        let biggestStartingPoint_n = null;
        while (!pq1.isEmpty() && pq2.front()[1] >= pq1.front()[0]) {
            biggestStartingPoint_n = pq1.front()[0];
            pq2.enqueue(pq1.dequeue());
        }
        //recalculate max overlapping sizes
        if (_ret_A[0] < pq2.size()) {
            console.assert(biggestStartingPoint_n !== null, "");
            _ret_A = [pq2.size(), biggestStartingPoint_n];
        }
        //pop out the light with smallelst ending point
        pq2.dequeue();
    }
    return _ret_A[1];
};



console.log(brightestPosition([[-10,2],[0,3],[5,1]]));