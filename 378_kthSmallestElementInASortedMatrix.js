/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    //do NOT add invalid coordinate to pq!
    let _pq = new PriorityQueue({
        compare: (a_a, b_a) => {
            return a_a[2]-b_a[2];
        }
    })
    _pq.enqueue([0, 0,matrix[0][0]]);
    // if (matrix[1] !== undefined) _pq.enqueue([1, 0]); error1 
    // if (matrix[0][1] !== undefined) _pq.enqueue([0, 1]);
    let currCount_n = 0;
    while (_pq.size() > 0) {
        let next = _pq.dequeue();
        currCount_n++;
        if (currCount_n === k) return next[2];
        // else matrix[next[0]][next[1]] = undefined;//! mark as visited! error2
        if (matrix[next[0] + 1] !== undefined
            && matrix[next[0] + 1][next[1]] !== undefined) {
            _pq.enqueue([next[0] + 1, next[1],matrix[next[0] + 1][next[1]]]);
            matrix[next[0] + 1][next[1]] = undefined;
        }
        if (matrix[next[0]][next[1] + 1] !== undefined) {
            _pq.enqueue([next[0], next[1] + 1,matrix[next[0]][next[1] + 1]]);
            matrix[next[0] ][next[1]+1] = undefined;
        }
    }
    return -1;
};

//优先队列结构定义
let util = require("./_util");
let PriorityQueue = util.PriorityQueue;

kthSmallest([[1, 3, 5], [6, 7, 12], [11, 14, 14]], 6)