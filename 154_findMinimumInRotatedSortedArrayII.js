/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums[0] < nums[nums.length - 1]) return nums[0]//trivial case no rotating
    let [lo, hi] = [0, nums.length - 1]
    while (lo < hi) {
        let mid = lo + ((hi - lo) >>> 1)
        if(nums[mid]>nums[hi]) lo = mid+1
        else if(nums[mid]>nums[hi]) hi = mid
        else --hi//TRICK IS HERE TO HANDLE DUPLICATES!a
    }
    return nums[lo]
};