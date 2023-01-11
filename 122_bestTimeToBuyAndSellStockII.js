/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length === 1) return 0;
    let maxProf_n = 0;
    for (let ind_n = 0; ind_n < prices.length; ++ind_n) {
        if (ind_n === 0) continue;
        let currDiff_n = prices[ind_n] - prices[ind_n - 1];
        if (currDiff_n > 0) { maxProf_n += currDiff_n; }
    }
    return maxProf_n;
};