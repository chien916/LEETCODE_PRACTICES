/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function (n, meetings) {
    //dual pq
    let _pq_free = new PriorityQueue({
        compare: (a_a, b_a) => {
            //[ind,start,end]
            let diff_n = a_a[1] - b_a[1];
            if (diff_n === 0) diff_n = a_a[0] - b_a[0];
            return diff_n;
        }
    });
    meetings.sort((a_a, b_a) => a_a[0] - b_a[0]);
    let _pq_busy = new PriorityQueue({
        compare: (a_a, b_a) => {
            let diff_n = a_a[2] - b_a[2];
            if (diff_n === 0) diff_n = a_a[0] - b_a[0];
            return diff_n;
        }
    });
    //main
    let useCount_n = Array(n.length).fill(0);
    while (meetings.length > 0) {
        while()
    }


};

//优先队列结构定义
let util = require("./_util");
let PriorityQueue = util.PriorityQueue;