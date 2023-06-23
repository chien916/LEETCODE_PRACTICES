/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (nums, k) {
    // //PREFIX SUM
    // let PSum = [nums]
    // for (let i = 1; i < nums.length; ++i)
    //     PSum[i] = PSum[i - 1] + nums[i]
    nums.sort((a, b) => a - b)
    //BINARY SEARCH BY VALUE
    let [d_lo, d_hi] = [0, 1e6]
    while (d_lo < d_hi) {
        let d_mid = d_lo + ((d_hi - d_lo + 0) >>> 1)
        //count number of pairs less or euql to d_mid
        let _k = 0
        //for l, locate the last r so that |A[l]-A[r]| <= d_mid INCLUSIVE RANGE [l+1,r)
        //[1,2,3,4,5] 
        for (let [l, r] = [0, 1]; l < nums.length; ++l) {
            r = Math.max(l + 1, r)
            while (r < nums.length && (nums[r] - nums[l]) <= d_mid) ++r
            if (r > l + 1) _k += (r - (l + 1))
        }
        console.log(`${d_mid} -> ${_k}`)
        //b search state transfer
        if (_k >= k)//too many pairs with distance less than d_mid -> distance guess is too big
            d_hi = d_mid
        else
            d_lo = d_mid + 1
    }
    return d_lo
};