/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplit = function (nums) {
    const A = nums
    const len = nums.length
    const m = 1e9 + 7
    //prefix sum
    let Ps = [BigInt(A[0])]
    for (let i = 1; i < len; ++i)
        Ps[i] = BigInt(A[i]) + Ps[i - 1]
    //sliding window
    let ans = 0
    for (let [le, ri, ri_] = [1, 2, -Infinity]; le < len; ++le) {
        ri = Math.max(ri, le + 1)
        //adjust "ri" so that left array is less than or equal to the mid array
        while (ri < len && !(Ps[le - 1] <= Ps[ri - 1] - Ps[le - 1])) {
            ++ri
        }
        if (ri === len) continue
        //adjust "ri" so that mid array is less than or equal to the right array
        // while (ri < len && !(Ps[ri - 1] - Ps[le - 1] <= Ps[len - 1] - Ps[ri - 1])) {
        //     ++ri
        // }
        if (!(Ps[ri - 1] - Ps[le - 1] <= Ps[len - 1] - Ps[ri - 1])) continue
        if (ri === len) continue
        //find ri' upper bound thru peek
        ri_ = Math.max(ri_, ri)//error sliding window: ADJUST BOUND ACCORDINGLY!
        while (ri_ + 1 < len && Ps[ri_ + 1 - 1] - Ps[le - 1] <= Ps[len - 1] - Ps[ri_ + 1 - 1]) {
            ++ri_
        }
        ans = (ans + (ri_ - ri + 1) % m) % m
    }
    //console.log(___debug)
    return ans

    // //two pointers + binary search
    // //[0,le-1] [le,ri-1] [ri,len-1]
    // //end index is EXCLUSIVE
    // // * subarray must be non-empty
    // let ans = 0
    // for (let le = 1; le <= len - 2; ++le) {
    //     let [ri_lo_, ri_hi_] = [le + 1, len - 1]
    //     //adjust "le" so that left array is less than or equal to the mid array
    //     while (ri_lo_ + 1 < len && Ps[le - 1] > (Ps[ri_lo_ - 1] - Ps[le - 1])) {
    //         ++ri_lo_
    //     }
    //     if (ri_lo_ > ri_hi_) break
    //     if (Ps[le - 1] > (Ps[ri_lo_ - 1] - Ps[le - 1])) break
    //     if (Ps[ri_lo_ - 1] - Ps[le - 1] > Ps[len - 1] - Ps[ri_lo_ - 1]) break
    //     //find upper bound -> what if the guess is too on the left?
    //     {
    //         let [ri_lo, ri_hi] = [ri_lo_, ri_hi_]
    //         while (ri_lo < ri_hi) {
    //             let ri_mid = ri_lo + ((ri_hi - ri_lo + 1) >> 1)//error!
    //             let leftSum = Ps[ri_mid - 1] - Ps[le - 1]
    //             let rightSum = Ps[len - 1] - Ps[ri_mid - 1]
    //             if (leftSum <= rightSum) ri_lo = ri_mid//lo is the walker
    //             else ri_hi = ri_mid - 1//hi is the anchor
    //         }
    //         //lo and hi will converge
    //         ri_hi_ = ri_lo
    //     }
    //     ans = (ans + (ri_hi_ - ri_lo_ + 1) % m) % m
    // }
    // return ans
};
