

// /**
//  * @param {string} s
//  * @return {number}
//  */
var minFlipsMonoIncr = function (s_s) {
    /**
     * 定义状态：
     * dp[i][0] -> 如果最终此bit是0，那么需要flip几位
     * dp[i][1] -> 如果最终此bit是1，那么需要flip几位
     * 
     * 状态转移：
     * dp[i][0]
     * = dp[i-1][0] + (1 if s[i]='1' or 0 if s[i]='0') 
     * -> 如果此位为0，那么上一位必须为0
     * 
     * dp[i][1]
     * = min(dp[i-1][0],dp[i-1][1]) + (1 if s[i]='0' or 0 if s[i]='1')
     * -> 如果此位为0，那么上一位可为1也可为0
     * 
     * 最终结果：
     * max(dp[i-1][0],dp[i-1][1]) 
     * -> 最后一位为0，则保证了整个数组全部为0，符合题目要求
     * -> 最后一位为1，则保证了整个数组要么全部为1，要么在某一个位置以后全部为1，符合题目要求
     * 
     * 基本状态：
     * dp[i][0] = 1 if s[i]='1' or 0 if s[i]='0'
     * dp[i][1] = 1 if s[i]='0' or 0 if s[i]='1'
     */
    let getBit_bF = (i_n) => s_s.charAt(i_n) === "1";
    let dp_nAA = Array(s_s.length).fill().map(() => Array(2).fill(0));
    for (let i_n = 0; i_n < s_s.length; ++i_n) {
        dp_nAA[i_n]
            = [(i_n === 0 ? 0 : dp_nAA[i_n - 1][0]) + (getBit_bF(i_n) ? 1 : 0)
                , (i_n === 0 ? 0 : Math.min(dp_nAA[i_n - 1][0], dp_nAA[i_n - 1][1])) + (getBit_bF(i_n) ? 0 : 1)];
    }
    return Math.min(dp_nAA[s_s.length - 1][0], dp_nAA[s_s.length - 1][1]);
};

console.log(minFlipsMonoIncr("00110"));