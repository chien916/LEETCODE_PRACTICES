/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (A) {
    /**
     * Observation:
     * An subarray will have an equal number of 
     * 1s and 0s if the prefix sum (counting 0 as -1
     * and 1 as 1) equals to 0
     */
    let P = [A[0] ? 1 : -1]
    let M = new Map()
    for (let i = 1; i < A.length; ++i) {
        P[i] = P[i - 1] + (A[i] ? 1 : -1)
        M.set(P[i], i)
    }
    let ans = 0
    if (M.has(0)) ans = M.get(0) + 1
    /**
     * P[j] - P[i] = 0
     * P[j] = P[i]
     */
    for (let i = 0; i < A.length; ++i) {
        if (M.has(P[i]))
            ans = Math.max(ans, M.get(P[i]) - i)
    }
    return ans
};

console.log(findMaxLength([0, 1]))