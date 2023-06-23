/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (m, n, k) {
    let [ans_lo, ans_hi] = [1, m * n]
    while (ans_lo < ans_hi) {
        let ans_mid = ans_lo + ((ans_hi - ans_lo) >>> 1)
        //count number of elements smaller or euqla to ans_mid
        let _k = 0
        for (let _m = 1; _m <= m; ++_m)
            _k += Math.floor(Math.min(n, ans_mid / _m))
      //  console.log(`${ans_mid} -> ${_k}`)
        if (_k >= k ) ans_hi = ans_mid
        else ans_lo = ans_mid + 1
    }
    return ans_lo
};