/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (M) {
    let l_i = M.length;
    let l_j = M[0].length;
    let Dp = Array(l_i * l_j).fill(Infinity);
    // for (let i = 0; i < l_i; ++i) {
    //     for (let j = 0; j < l_j; ++j) {
    //         Dp[i * l_i + j] = M[i][j];
    //     }
    // }
    Dp[0] = M[0][0];
    for (let i = 0; i < l_i; ++i) {
        for (let j = 0; j < l_j; ++j) {
            if (i + 1 < l_i) {
                Dp[(i + 1) * l_j + j] =
                    Math.min(
                        Dp[(i + 1) * l_j + j],
                        Dp[i * l_j + j] + M[i + 1][j]
                    );
            }
            if (j + 1 < l_j) {
                Dp[i * l_j + (j + 1)] =
                    Math.min(
                        Dp[i * l_j + (j + 1)],
                        Dp[i * l_j + j] + M[i][j + 1]
                    );
            }
            let _;
        }
    }

    return Dp[Dp.length - 1];
};

console.log(minPathSum([[1,2,3],[4,5,6]]))