/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (s_1, s_2) {
    //DP::DUAL_SEQUENCES
    [s_1, s_2] = ["!" + s_1, "!" + s_2];
    let [l_s1, l_s2] = [s_1.length, s_2.length];
    let Dp = Array(l_s1 + 1).fill().map(
        () => Array(l_s2 + 1).fill(0)
    );
    //Dp[0][0] = 0;//init driver
    for (let i = 1; i <= l_s1; ++i) {
        for (let j = 1; j <= l_s2; ++j) {
            if (s_1.charCodeAt(i) === s_2.charCodeAt(j)) {
                Dp[i][j] = Dp[i - 1][j - 1] + 1;
            } else {
                Dp[i][j] = Math.max(Dp[i][j - 1], Dp[i - 1][j]);
            }
        }
    }
    return Dp[l_s1][l_s2];

};