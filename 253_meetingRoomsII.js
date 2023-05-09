
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals_nAA) {
    /**
     * 错误1：
     * PriorityQueue Comparator
     * a-b会是把queue从小到大排序，b-a反之则从大到小排序
     * 
     * 错误2：
     * PriortyQueue 的 dequeue()是把front() pop出去
     * 索引越小的元素priority越高
     * 
     */
    let roomsInUse_nAAPq = new PriorityQueue({
        compare: (a_nA, b_nA) => { return a_nA[1] - b_nA[1]; }
    });
    let numberOfRoomsUsed_n = 0;
    intervals_nAA.sort((a_nA, b_nA) => a_nA[0] - b_nA[0]).forEach((it_nA) => {
        if (roomsInUse_nAAPq.size() > 0 && roomsInUse_nAAPq.front()[1] <= it_nA[0])//!2
            roomsInUse_nAAPq.dequeue(); 
        else
            numberOfRoomsUsed_n += 1;
        roomsInUse_nAAPq.enqueue(it_nA);
    });
    return numberOfRoomsUsed_n;
};


const {
    PriorityQueue,
    MinPriorityQueue,
    MaxPriorityQueue
  } = require('@datastructures-js/priority-queue');


console.log(minMeetingRooms([[1,8],[6,20],[9,16],[13,17]]));