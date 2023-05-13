/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function (tasks) {
    //let queByProcTime_ = new MinPriorityQueue({ priority: (it_A) => it_A[1] });
    // let queByEnqTime_ = new MinPriorityQueue({ priority: (it_A) => it_A[0] });
    let queByProcTime_ = new PriorityQueue({
        compare: (a_A, b_A) => {
            if (a_A[1] === b_A[1]) return a_A[2] - b_A[2];
            else return a_A[1] - b_A[1];
        }
    });
    let queByEnqTime_ = new PriorityQueue({
        compare: (a_A, b_A) => {
            if (a_A[0] === b_A[0]) return a_A[2] - b_A[2];
            else return a_A[0] - b_A[0];
        }
    })
    for (let i_n = 0; i_n < tasks.length; ++i_n) {
        queByEnqTime_.enqueue([tasks[i_n][0], tasks[i_n][1], i_n]);
    }
    let _ret_A = [];
    for (let currTime_n = 0; ;) {
        if (queByProcTime_.isEmpty()) {
            //no tasks available, change time to point where a task is available
            if (queByEnqTime_.isEmpty()) break;//all tasks finished
            currTime_n = queByEnqTime_.front()[0];
        } else {
            //some tasks available, change time to point where a task of shortest proc time is finished
            let processedTask_A = queByProcTime_.dequeue();
            _ret_A.push(processedTask_A[2]);
            currTime_n += processedTask_A[1];
        }
        //compare current time and see if any tasks are available
        while (!queByEnqTime_.isEmpty()
            && queByEnqTime_.front()[0] <= currTime_n) {
            queByProcTime_.enqueue(queByEnqTime_.dequeue());
        }
    }
    return _ret_A;
}

const {
    PriorityQueue,
    MinPriorityQueue,
    MaxPriorityQueue
} = require('@datastructures-js/priority-queue');

inp = [[7, 10], [7, 12], [7, 5], [7, 4], [7, 2]];
console.log(getOrder(inp));