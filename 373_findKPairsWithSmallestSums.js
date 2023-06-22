/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
    //TLE!!
    let [sum_lo, sum_hi] = [(-1e9*2), (1e9*2)]
    let [l_,r_] = [0, nums2.length - 1]
    while (sum_lo < sum_hi) {
        let [l, r] = [0, nums2.length - 1]//reset
        let sum_mid = sum_lo + Math.floor((sum_hi - sum_lo)/2)//right rounds
        //count the #pairs that has a sum less or equal to sum_mid
        let _k = 0
        //TWO POINTERS
        //fixing l, find the r that sum of nums1[l] and nums2[r] less or eql to sum_mid
        //since nums2 is ascending, a right shift of l will force a left shift of r
        for (; l < nums1.length; ++l) {
            while (r > -1 && (nums1[l] + nums2[r]) > sum_mid) --r
            _k += r + 1
        }
      //  console.log(`${sum_mid}, ${_k}`)
        //if there's too few or equal pairs, it means the sum guess can be bigger
        //console.log(`${sum_lo} ${sum_hi} : sum = ${sum_mid} has ${_k} pairs`)
        if (_k >= k) sum_hi = sum_mid
        else sum_lo = sum_mid + 1
    }
    //console.log(sum_lo)
    //answer formation
    let Ans = []
    for (let i = 0; Ans.length < k && i < nums1.length; ++i) {
        for (let j = 0; Ans.length < k && j < nums2.length; ++j) {
            if (Ans.length < k && (nums1[i] + nums2[j]) < sum_lo)
                Ans.push([nums1[i], nums2[j]])
        }
    }
    for (let i = 0; Ans.length < k && i < nums1.length; ++i) {
        for (let j = 0; Ans.length < k && j < nums2.length; ++j) {
            if ((nums1[i] + nums2[j]) === sum_lo)
                Ans.push([nums1[i], nums2[j]])
        }
    }
    // Ans.sort((A, B) => {
    //     if (A[1] === B[1]) return A[0] - B[0]
    //     else return A[1] - B[1]
    // })
    // while(Ans.length>k) Ans.pop()
    return Ans
};
