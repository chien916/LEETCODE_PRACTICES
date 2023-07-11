/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (t, C) {
    /**
     * DP::KNAPSACK
     * Dp[i][]
     */
    let Dp = Array(t + 1).fill(0);
    Dp[0] = 1;
    for (let i = 0; i < C.length; ++i) {
        for (let s = 0; s <= t; ++s) {
            let d = s - C[i];
            if (d >= 0) Dp[s] += Dp[d];
        }
    }
    return Dp[t];
};