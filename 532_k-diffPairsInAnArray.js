/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
    let M = new Map()
    for (let num of nums) {
        if (!M.has(num)) M.set(num, 0)
        M.set(num, M.get(num) + 1)
    }
    let ans = 0
    for (let [key, val] of M) {
        if (k === 0) ans += (val >= 2) ? 1 : 0
        else ans += (M.has(key + k)) ? 1 : 0
    }
    return ans
};