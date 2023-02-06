/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length === 1) { return 0; }
    let res_n = 0;
    /**
     * 关键词：最多两次交易，并且两次交易不能有时间重合
     * 所以可以找到一个分割点，分割点左边完成一场交易，分割点右边完成一场交易
     * 左边和右边的交易没有时间重合，并且两个交易都是在对应区间的利润最大化
     * 从左到右遍历分割点，找到一个左区间和右区间利润之和最大化的分割点
     */

    /**
     * 解决方案1：遍历到每个分割点时，利用121题分别找左区间和右区间的最大利润
     * 时间复杂度:O（n^2)
     */

    /**
     * 在解决方案1中，每到一个分割点，都要找一次左区间和右区间的最大利润
     * 但是可以利用两个动态规划数组来保存在某个分割点的左边和右边的最大利润
     * 时间复杂度：O（n)
     */
    let leftDp_nA = new Array(prices.length);
    let currMin_n = null;
    for (let i_n = 0; i_n < prices.length; ++i_n) {
        if (i_n === 0) {
            leftDp_nA[i_n] = 0;
            currMin_n = prices[i_n];
            continue;
        }
        let currProf_n = prices[i_n] - currMin_n;
        leftDp_nA[i_n] = Math.max(leftDp_nA[i_n - 1], currProf_n);
        currMin_n = Math.min(prices[i_n], currMin_n);
    }


    let rightDp_nA = new Array(prices.length);
    let currMax_n = null;
    for (let i_n = prices.length - 1; i_n >= 0; --i_n) {
        if (i_n === prices.length - 1) {
            currMax_n = prices[i_n];
            rightDp_nA[i_n] = 0;
            continue;
        }
        let currProf_n = currMax_n - prices[i_n];
        rightDp_nA[i_n] = Math.max(rightDp_nA[i_n + 1], currProf_n);
        currMax_n = Math.max(prices[i_n], currMax_n);
    }

    let currMaxTotalProf_n = 0;
    /**
     * 在寻找切割点时，题目没有规定必须要买两次
     */
    for (let i_n = 0; i_n <= prices.length; ++i_n) {////
        let currTotalProf_n = null;
        if (i_n === 0) { currTotalProf_n = rightDp_nA[i_n]; }
        else if (i_n === prices.length) { currTotalProf_n = leftDp_nA[i_n - 1]; }
        else { currTotalProf_n = leftDp_nA[i_n - 1] + rightDp_nA[i_n]; }
        currMaxTotalProf_n = Math.max(currTotalProf_n, currMaxTotalProf_n);
    }

    res_n = currMaxTotalProf_n;
    return res_n;
}

maxProfit([1, 2, 3, 4, 5]);