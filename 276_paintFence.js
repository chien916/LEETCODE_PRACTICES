/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function (n, k) {
    /**
     * Dp[i][0] -> paint same color with i-1 -> = Dp[i-1][1] 
     * (Dp[i-1][0] isnt a candidate as three fence will have the same color)
     * Dp[i][1] -> paint different color with i-1 -> (Dp[i-1][0] + Dp[i-1][1])*(k-1)
     * 
     */
    // let Dp = Array(n).fill().map(() => [0, 0]);
    // Dp[0] = [k, k];
    //init state represents first 2 fences
    if (n === 1) return k;
    if (n === 2) return k * k;
    let [dp_0, dp_1] = [k, k * (k - 1)];
    for (let i = 3; i <= n; ++i) {
        let dp_0_ = dp_1;
        let dp_1_ = (dp_0 + dp_1) * (k - 1);
        [dp_0, dp_1] = [dp_0_, dp_1_];
    }
    return dp_0 + dp_1;
};