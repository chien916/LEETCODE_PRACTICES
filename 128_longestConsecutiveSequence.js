/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    /**
     * Consecutive -> use Set
     * Locate a number and keep finding its consecutive (next element)
     */
    let S = new Set(nums)
    let ans = 0
    for (let num of S) {
        if (!S.has(num - 1)) {
            let _ans = 0
            while (S.has(num++)) ++_ans
            ans = Math.max(ans, _ans)
        }
    }
    return ans
};