/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (N) {
    /**
     * Connecting in circle: 
     * State 1: First house skipped
     * State 2: Second house skipped
     * 
     * dp[i][0] -> max money if i-th house is skipped
     * dp[i][1] -> max money if i-th house is robbed
      */
    let ans = 0;
    //state 1:
    
    let dp = Array(N.length).fill().map(() => [0, 0]);
    for (let i = 1; i < N.length; ++i) {
        ans = Math.max(ans, dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]));
        ans = Math.max(ans, dp[i][1] = dp[i - 1][0] + N[i]);
    }
    //state 2:
    let dp2 = Array(N.length - 1).fill().map(() => [0, N[0]]);
    ans = Math.max(ans,N[0]);//this is important -> init condi is also a valid answer
    for (let i = 1; i < N.length - 1; ++i) {
        ans = Math.max(ans, dp2[i][0] = Math.max(dp2[i - 1][0], dp2[i - 1][1]));
        ans = Math.max(ans, dp2[i][1] = dp2[i - 1][0] + N[i]);
    }

    return ans;


};
