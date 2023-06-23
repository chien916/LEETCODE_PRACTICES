/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let [ans_lo, ans_hi] = [-1e4, 1e4]
    while (ans_lo < ans_hi) {
        let ans_mid = ans_lo + ((ans_hi - ans_lo + 0) >>> 1)
        //count the number of elements less than or equal to ans_mid
        let _k = nums.reduce((p, v) => (v > ans_mid) ? (p + 1) : p,0)
        //if more elements in the array is larger to ans_mid
        //then it means our guess is too small,
        console.log(`ans = ${ans_mid} -> k = ${_k}`)
        if (_k > k-1) ans_lo = ans_mid + 1
        else ans_hi = ans_mid
    }
    return ans_lo
};