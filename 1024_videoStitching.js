/**
 * @param {number[][]} clips
 * @param {number} time
 * @return {number}
 */
var videoStitching = function (clips, time) {
    //similar thoughts with 435/464/1235

    /**
     * the difference is right now two segments must 
     * be connected (end time conenct to privious start time)
     * z
     * and a upper limit is defined
     */

    clips.sort((a_A, b_A) =>
        a_A[0] === b_A[0]
            ? a_A[1] - b_A[1]
            : a_A[0] - b_A[0]);

    let heap = new PriorityQueue({
        /**
         * [end time,number of clips needed]
         * !!later end time having higher priorty!!
         */
        compare: (a_A, b_A) =>
            -(a_A[0] - b_A[0])
    });
    //same format as element in heap
    let minCount_n = Number.MAX_SAFE_INTEGER;
    for (let i_n = 0; i_n <= clips.length; ++i_n) {
        while (!heap.isEmpty()
            && (i_n === clips.length
                || clips[i_n][0] <= heap.front()[0])) {
            minCount_n = Math.min(minCount_n, heap.front()[1]);
            if (i_n < clips.length - 1 && clips[i_n + 1][0] === heap.front()[1]) minCount_n -= 1;
        }
        if (i_n < clips.length - 1) heap.enqueue([clips[i_n][1], minCount_n + 1]);

    }


};


const {
    PriorityQueue,
} = require('@datastructures-js/priority-queue');
