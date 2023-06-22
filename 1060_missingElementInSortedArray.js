/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement = function (nums, k) {
    /**
     * Binary search by value
     * -> use the information from index
     * Since looking for the FIRST missing element, we'll inspect left range
     */
    let [lo, hi] = [0, nums.length - 1]
    while (lo < hi) {
        let mid = lo + ((hi - lo + 1) >>> 1)//floor
        //we will make the left range EXCLUSIVE
        let indDiff = mid - lo
        let valDiff = nums[mid] - nums[lo]
        let missingCount = valDiff - indDiff
       // console.log(`In range ${lo}:${mid} -> missed ${missingCount} eles`)
        if (missingCount >= k) hi = mid - 1
        else {
            lo = mid
            k -= missingCount
        }
    }
    //now it points to the left POINTER of the range of which the missing element
    //sits in
    return nums[lo] + k
};