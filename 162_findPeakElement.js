/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    /**
     * OBSERVATION:
     * for [lo:mid] and [mid+1:hi]
     * We look at mid and mid+1 and see if mid+1>mid
     * A decreasing point is found -> either mid or somepoint on the left exists an peak
     * A increasing point is found -> peak is definitely not mid as mid+1>mid
     * 
     */
    let [lo, hi] = [0, nums.length - 1]
    while (lo < hi) {
        let mid = lo + ((hi - lo + 1) >>> 1)//right rounding
        if (nums[mid] > nums[mid - 1]) lo = mid//because of right rounding, mid-1 is always defined
        else hi = mid - 1
    }
    return lo
};