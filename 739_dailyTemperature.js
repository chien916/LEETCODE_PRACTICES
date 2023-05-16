/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let _ret_A = Array(temperatures.length).fill(0);
    /**
     * decrStack tells the last smaller element
     * the number of days on the last smaller element wait is
     * the difference of that day and the current date
     * because the current date is the first greater element 
     */
    let decrStack_A = [];//stores the INDEX!
    for (let i_n = 0; i_n < temperatures.length; ++i_n) {
        while (decrStack_A.length > 0
            && temperatures[i_n] > temperatures[decrStack_A[decrStack_A.length - 1]]) {
            let lastInd_n = decrStack_A.pop();
            _ret_A[lastInd_n] = i_n - lastInd_n;
        }
        decrStack_A.push(i_n);
    }
    return _ret_A;

};