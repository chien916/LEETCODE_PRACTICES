/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function (N) {
    let len = N.length;
    let Dp = Array(len).fill().map(
        () => Array(len).fill().map(
            () => [0, 0]
        )
    );
    //init driver -> pre process length = 1
    for (let i = 0; i < len; ++i) {
        Dp[i][i] = [N[i], 0];
    }
    //dp iterations
    for (let l = 2; l <= len; ++l) {
        for (let i = 0; i + l - 1 < len; ++i) {
            //i+l-1 points to the right index
            let dp_1 = [
                Dp[i + 1][i + l - 1][1] + N[i],
                Dp[i + 1][i + l - 1][0]
            ];
            let dp_2 = [
                Dp[i][i + l - 2][1] + N[i + l - 1],
                Dp[i][i + l - 2][0]
            ];
            if (dp_1[0] > dp_2[0]) Dp[i][i + l - 1] = dp_1;
            else Dp[i][i + l - 1] = dp_2;
        }
    }
    return Dp[0][len - 1][0] >= Dp[0][len - 1][1];
};