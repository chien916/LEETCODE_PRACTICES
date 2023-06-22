/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var kthSmallestSubarraySum = function (nums, k) {
    let [sum_lo, sum_hi] = [1, Number.MAX_SAFE_INTEGER]//error 2: right rounding ! minus 1
    while (sum_lo < sum_hi) {
        let sum_mid = sum_lo + ((sum_hi - sum_lo) >>> 1)
        //TWO POINTERS determine number of subarrays starting from nums[l]
        //smaller than sum_mid
        let _sum = 0
        let count = 0
        for (let [l, r] = [0, 0]; l < nums.length;) {
            r = Math.max(l, r)
            //exclusive range
            while (r < nums.length && _sum + nums[r] <= sum_mid) {
                _sum += nums[r++]
                console.log(`adding nums[${r - 1}] -> ${_sum}`)
            }
            count += (r - l)
            if (r > l) _sum -= nums[l++]//error3
            else l++
            console.log(`removing nums[${l - 1}] -> ${_sum}`)
        }
        console.log(`${sum_mid} -> ${count}`)
        //many subarrays summing less than sum_mid -> reduce sum_mid
        //kth smallest -> 1,2,3,3,5 
        if (count >= k - 1) sum_hi = sum_mid//err1: kth for comparing -> minus 1!
        else sum_lo = sum_mid + 1
    }
    return sum_lo
};