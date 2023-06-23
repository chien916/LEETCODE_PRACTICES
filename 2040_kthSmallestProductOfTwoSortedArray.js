/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var kthSmallestProduct = function (nums1, nums2, k) {
    //BINARY SEARCH BY VALUE
    let [p_lo, p_hi] = [-(1e5 ** 2), (1e5) ** 2]
    while (p_lo < p_hi) {
        let p_mid = p_lo + Math.floor((p_hi - p_lo + 0) / 2)
        // console.log(" --> when p = " + p_mid)
        let k_ = 0//number of pairs that satisfies nums1[i]*nums2[j] <= p_mid
        for (let l = 0; l < nums1.length; ++l) {
            /**  nums1[l] * nums2[r] <= p_mid
             *   nums2[r] <= p_mid/nums1[l] if nums1[l] > 0
             *   nums2[r] >= p_mid/nums1[l] if nums1[l] < 0
             *   since nums1 is monotonically increasing
             *   p_mid/nums1 is also monotonically increasing as p_mid is constant
             *   
             * Boundary case when nums1[l] = 0
             *   0 * nums2[k] <= p_mid
             *   0 <= p_mid
             *   p_mid >= 0
             *   
             */
            let x = p_mid / nums1[l]
            if (nums1[l] === 0) {
                if (p_mid >= 0) k_ += nums2.length
            } else if (nums1[l] > 0 && nums2[0] <= x) {
                //BINARY SEARCH 
                let [r_lo, r_hi] = [0, nums2.length - 1]
                while (r_lo < r_hi) {
                    let r_mid = r_lo + ((r_hi - r_lo + 1) >>> 1)
                    if (nums2[r_mid] > x) r_hi = r_mid - 1
                    else r_lo = r_mid
                }
                // for (let _r = r_lo; _r > -1; --_r)
                //     console.log(`[${nums1[l]},${nums2[_r]}]`)
                k_ += (r_lo - (-1))
            } else if (nums1[l] < 0 && nums2[nums2.length - 1] >= x) {
                let [r_lo, r_hi] = [0, nums2.length - 1]
                while (r_lo < r_hi) {
                    let r_mid = r_lo + ((r_hi - r_lo + 0) >>> 1)
                    if (nums2[r_mid] < x) r_lo = r_mid + 1
                    else r_hi = r_mid
                }
                // for (let _r = r_lo; _r < nums2.length; ++_r)
                //     console.log(`[${nums1[l]},${nums2[_r]}]`)
                k_ += (nums2.length - r_lo)
            }
        }
        if (k_ >= k) //too many pairs smaller or equal to p_mid, guess a smaller p
            p_hi = p_mid
        else
            p_lo = p_mid + 1
    }
    return p_lo
};
console.log(kthSmallestProduct([-2, -1, 0, 1, 2], [-3, -1, 2, 4, 5], 3))