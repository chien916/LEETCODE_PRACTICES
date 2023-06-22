/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function (nums, k) {
    //binary search by value
    let ans_lo = Math.max(...nums)
    let ans_hi = nums.reduce((p, c) => p + c, 0)
    while (ans_lo < ans_hi) {
        let ans_mid = ans_lo + ((ans_hi - ans_lo) >>> 1)//ceil
        let _k = 1
        {
            let currSum = 0
            for (let num of nums) {
                if (currSum + num > ans_mid) {
                    ++_k
                    currSum = num
                } else {
                    currSum += num
                }
            }
        }
       // console.log(`trying ${ans_mid} gives k = ${_k}`)
        if (_k <= k) ans_hi = ans_mid
        else ans_lo = ans_mid +1
    }
    return ans_lo
};