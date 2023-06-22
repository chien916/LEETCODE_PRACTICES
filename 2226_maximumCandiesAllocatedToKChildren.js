 /**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function (candies, k) {
    if (candies.reduce((p, v) => p + v) < k) return 0//boundary case 
    let [c_lo, c_hi] = [1, Number.MAX_SAFE_INTEGER]
    while (c_lo < c_hi) {
        let c_mid = c_lo + ((c_hi - c_lo + 1) >>> 1)//right round
        let _k = candies.reduce((p, v) => p + Math.floor(v / c_mid), 0)//number of piles 
        console.log(`c = ${c_mid} yields k = ${_k}`)
        if (_k >= k) c_lo = c_mid
        else c_hi = c_mid - 1
    }
    return c_lo
};