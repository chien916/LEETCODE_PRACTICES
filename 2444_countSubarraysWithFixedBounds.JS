/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function (nums, minK, maxK) {
    /**
     * 常见subarray方法: 取定右边界,寻找左边界
     * 
     * 错误1: 一个起始index 一个结束index 几种选择 做差以后要加一
     */
    let _ret_n = 0;
    let lastMinKInd_n = NaN;
    let lastMaxKInd_n = NaN;
    let lastInvInd_n = -1;
    for (let i_n = 0; i_n < nums.length; ++i_n) {
        if (nums[i_n] === minK) lastMinKInd_n = i_n;
        if (nums[i_n] === maxK) lastMaxKInd_n = i_n;
        if (nums[i_n] < minK || nums[i_n] > maxK) lastInvInd_n = i_n;
        if (!isNaN(lastMinKInd_n) && !isNaN(lastMaxKInd_n)) {
            let maxBeginInd_n = Math.min(lastMinKInd_n, lastMaxKInd_n);
            let possBeginInds_n = maxBeginInd_n - (lastInvInd_n + 1) + 1;//!
            if (possBeginInds_n < 0) continue;//there's a invalid value on the right
            _ret_n += possBeginInds_n;
        }
    }
    return _ret_n;
};

countSubarrays([1, 3, 5, 2, 7, 5], 1, 5);