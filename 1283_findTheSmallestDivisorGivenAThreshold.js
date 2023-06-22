/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function (nums, threshold) {
    let [d_lo, d_hi] = [0, 1e6]
    while (d_lo < d_hi) {
        let d_mid = d_lo + ((d_hi - d_lo) >>> 1)
        let sum = nums.reduce((p, v) => p + Math.ceil(v / d_mid), 0)
      //  console.log(`d = ${d_mid} yields sum = ${sum} -> `)
        if (sum <= threshold) d_hi = d_mid
        else d_lo = d_mid + 1
    }
    return d_lo
};