/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @return {number}
 */
var numberOfGoodPaths = function (vals, edges) {
    //greedy / union find
    /**
     * define union find data structure:
     */
    let val2nod = new Map();
    for (let [ind_n, val_n] of val_n.entries()) {
        if (!val2nod.has(val_n)) val2nod.set(val_n, []);
        val2nod.get(val2nod).push(ind_n);
    }
    let val2nod_A = [...val2nod].sort((a_A, b_A) => a_A[0] - b_A[0]);
    


};

// //优先队列结构定义
// let util = require("./_util");
// let PriorityQueue = util.PriorityQueue;
