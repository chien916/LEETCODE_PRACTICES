/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function (A) {
    /**
     * Observation:
     * 1+0 = 1 => odd  + even = odd  => odd  - even = odd
     * 1+1 = 2 => odd  + odd  = even => even - odd  = odd
     * 0+0 = 0 => even + even = even => even - even = even
     * 
     * Let Sum(0:i-1) and Sum(i:j) 
     * Sum(0:j) = Sum(0:i-1) + Sum(i:j)
     * Sum(i:j) = Sum(0:j) - Sum(0:i-1)
     * Sum(i:j) = P[j] - P[i-1]
     * odd        odd    even
     * odd        even   odd
     * even       even   even
     */
    let n_e = 1
    let n_o = 0
    let w = A.length
    let ans = 0
    let mod = 1e9 + 7
    let p = 0
    for (let i = 0; i < w; ++i) {
        p = p + A[i]
        if (p % 2) {
            ans = (ans + n_e) % mod
            ++n_o
        }
        else {
            ans = (ans + n_o) % mod
            ++n_e
        }
    }
    return ans
};