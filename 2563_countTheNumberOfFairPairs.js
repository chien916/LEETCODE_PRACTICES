/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function (A, lo, up) {
    A.sort((a, b) => a - b)
    let ans = 0
    for (let i = 0; i < A.length - 1; ++i) {
        /**
         * A[i]+A[j] >= lo => A[j] >= lo - A[i] = _lo
         * 
         * A[i]+A[j] <= hi => A[j] <= hi - A[i] = _hi
         */
        let [_lo, _up] = [lo - A[i], up - A[i]]
        let [l_lo, l_hi, r_lo, r_hi] = [i + 1, A.length - 1, i + 1, A.length - 1]
        if (A[l_hi] < _lo || A[r_lo] > _up) continue//no solution can be found
        while (l_lo < l_hi) {
            let l_mid = l_lo + ((l_hi - l_lo) >>> 1)
            if (A[l_mid] >= _lo) l_hi = l_mid
            else l_lo = l_mid + 1
        }
        while (r_lo < r_hi) {
            let r_mid = r_lo + ((r_hi - r_lo + 1) >>> 1)
            if (A[r_mid] <= _up) r_lo = r_mid
            else r_hi = r_mid - 1
        }
        ans += (r_lo - l_lo + 1)
    }
    return ans
};

console.log(countFairPairs([0,1,7,4,4,5],3,6))