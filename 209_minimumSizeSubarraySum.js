/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let minLength_n = Number.MAX_SAFE_INTEGER;
    let currSum_n = nums[0];
    let swInds_A = [0, 0];
    for (; swInds_A[1] < nums.length;) {
        //left pointer shift
        if (currSum_n >= target) {
            minLength_n = Math.min(minLength_n, swInds_A[1] - swInds_A[0] + 1);
            currSum_n -= nums[swInds_A[0]++];

        }
        //right pointer shift
        else if (currSum_n < target) {
            currSum_n += nums[++swInds_A[1]];
        }
        //both pointer shift
        swInds_A[1] = Math.max(swInds_A[0], swInds_A[1]);
    }
    if (minLength_n === Number.MAX_SAFE_INTEGER) return 0;
    return minLength_n;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));