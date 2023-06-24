/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function (nums, k) {
    /**
     * -- HASH MAP STORES PREFIX SUM AND INDEX -- 
     * Why: Locate a subarray that sums up to a certain value in O(1)
     */
    let M = new Map()
    let Pfs = [...nums]
    let ans = 0
    /**
     * VERY Important!
     * A empty subarray sums to 0!
     * Very useful when calculating the longest subarray!
     */
    M.set(0,-1)
    for (let i = 0; i < nums.length; ++i) {
        if (i > 0) Pfs[i] += Pfs[i - 1]
        //look at if there's any subarray that sums up to a value V
        //such that Pfs[i] - V = k -> V = PFs[i] - k
        if (M.has(Pfs[i] - k))
            ans = Math.max(ans, i - M.get(Pfs[i] - k))
        //we only stores the first index
        //as the first index generates longest subarray
        if (!M.has(Pfs[i])) M.set(Pfs[i], i)
    }
    return ans
};
console.log(maxSubArrayLen([1,-1,5,-2,3],3))