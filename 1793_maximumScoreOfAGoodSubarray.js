/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function (nums, k) {
    //monotonic stack
    let nextSmaller_a = Array(nums.length).fill(nums.length);
    {
        let stack_a = [];
        for (let [ind_n, val_n] of nums.entries()) {
            while (stack_a.length > 0 && val_n < nums[stack_a[stack_a.length - 1]])
                nextSmaller_a[stack_a.pop()] = ind_n;
            stack_a.push(ind_n);
        }
    }
    let prevSmaller_a = Array(nums.length).fill(-1);
    {
        let stack_a = [];
        for (let [ind_n, val_n] of [...nums.entries()].reverse()) {
            while (stack_a.length > 0 && val_n < nums[stack_a[stack_a.length - 1]])
                prevSmaller_a[stack_a.pop()] = ind_n;
            stack_a.push(ind_n);
        }
    }
    //conclusion reduction
    let _ret_n = 0;
    for (let [ind_n, val_n] of nums.entries()) {
        let j_n = nextSmaller_a[ind_n] - 1;
        let i_n = prevSmaller_a[ind_n] + 1;
        let curr_n = val_n * (j_n - i_n + 1);
        if (curr_n > _ret_n && i_n <= k && k <= j_n) _ret_n = curr_n;
    }

    return _ret_n;
};

// //优先队列结构定义
// let util = require("./_util");
// let PriorityQueue = util.PriorityQueue;

console.log(maximumScore([6569, 9667, 3148, 7698, 1622, 2194, 793, 9041, 1670, 1872],5))