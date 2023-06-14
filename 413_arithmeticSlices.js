/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
    let totalCount_n = 0;
    let lastInd_n = 0;
    if (nums.length <= 2) return 0;//boundary case
    //let currCount_n = 0;
    let lastDiff_n = nums[1] - nums[0];
    for (let i_n = 2; i_n < nums.length; ++i_n) {
        if (nums[i_n] - nums[i_n - 1] !== lastDiff_n) {
            lastDiff_n = nums[i_n] - nums[lastInd_n = i_n - 1];
            //currCount_n = 0;
        }
        if (lastInd_n + 2 <= i_n) {
            totalCount_n += i_n - (lastInd_n + 1);
        }
    }
    return totalCount_n;
};