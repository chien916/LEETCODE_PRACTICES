/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a_nA, b_nA) => {
        if (a_nA[0] === b_nA[0]) return a_nA[1] - b_nA[1];
        else return a_nA[0] - b_nA[0];
    });
    for (let ind_n = 1; ind_n < intervals.length; ++ind_n) {
        let prevInd_n = ind_n - 1;
        while (!intervals[prevInd_n]) --prevInd_n;
        if (intervals[prevInd_n][1] >= intervals[ind_n][0]) {
            intervals[prevInd_n][1] = Math.max(intervals[ind_n][1], intervals[prevInd_n][1]);
            intervals[ind_n] = null;
        }
    }
    let res_nA = intervals.filter(it_n => it_n !== null);
    return res_nA;
};

let a = merge([[1, 4], [0, 4]]);
console.log(a);
