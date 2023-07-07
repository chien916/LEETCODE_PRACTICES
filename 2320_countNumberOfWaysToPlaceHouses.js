/**
 * @param {number} n
 * @return {number}
 */
var countHousePlacements = function (n) {
    /**
     * Dp[i][0] -> number of ways if skipping at ith pos
     * -> Dp[i-1][0] + Dp[i-1][1]
     * Dp[i][1] -> number of ways if placing at ith pos
     * -> Dp[i-1][0]
     */
    let [dp_0, dp_1] = [1n, 1n];
    let ans = 0;
    for (let i = 2; i <= n; ++i) {
        [dp_0, dp_1] = [dp_0 + dp_1, dp_0];
    }
    let m = BigInt(1e9 + 7);
    return Number((dp_0 + dp_1) ** 2n % m);
};