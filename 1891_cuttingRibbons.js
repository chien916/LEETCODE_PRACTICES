/**
 * @param {number[]} ribbons
 * @param {number} k
 * @return {number}
 */
var maxLength = function (ribbons, k) {
    let [lo, hi] = [0, 1e5]
    while (lo < hi) {
        let mid = lo + ((hi - lo + 1) >>> 1)//right rounding
        let segCount = 0
        for (let ribbon of ribbons) {
            segCount += Math.floor(ribbon / mid)//mid is never 0 bc of right rounding 
        }
        if (segCount >= k) lo = mid
        else hi = mid - 1
    }
    return lo
};