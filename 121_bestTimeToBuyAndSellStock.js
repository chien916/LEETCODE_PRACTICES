/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxProf_n = 0;
    for (let ind_n = 0; ind_n < prices.length; ++ind_n) {
        if (ind_n === 0) continue;
        let currProf_n = prices[ind_n] - prices[ind_n - 1];
        if (currProf_n > maxProf_n) { maxProf_n = currProf_n; }
        prices[ind_n] = Math.min(prices[ind_n - 1], prices[ind_n]);

    }
    return maxProf_n;
};