/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (M) {
    let l_i = M.length;
    let l_j = M[0].length;
    if (M[l_i - 1][l_j - 1]) return 0;//corner
    let Dp = Array(l_i * l_j).fill(0);
    Dp[0] = 1;// init driver
    for (let i = 0; i < l_i; ++i) {
        for (let j = 0; j < l_j; ++j) {
            if (M[i][j]) continue;
            if (i + 1 < l_i) {
                Dp[(i + 1) * l_j + j] += Dp[i * l_j + j];
            }
            if (j + 1 < l_j) {
                Dp[i * l_j + (j + 1)] += Dp[i * l_j + j];
            }
        }
    }
    return Dp[l_i * l_j - 1];
};