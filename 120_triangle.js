/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (M) {
    let l_m = M.length;
    let Dp = Array(l_m).fill(Infinity);
    Dp[0] = M[0][0];
    for (let i = 1; i < l_m; ++i) {
        let Dp_ = Array(l_m).fill(Infinity);
        for (let j = 0; j <= i; ++j) {
            Dp_[j] = Dp[j] + M[i][j];
            if (j - 1 > -1) Dp_[j] = Math.min(Dp_[j], Dp[j - 1] + M[i][j]);
        }
        Dp = Dp_;
    }
    return Math.min(...Dp);
};