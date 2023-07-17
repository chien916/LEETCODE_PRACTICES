/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function (n) {
    let l_ori = n;
    let l_adj = n + 2;
    let Dp = Array(l_adj).fill().map(
        () => Array(l_adj).fill(Infinity)
    );
    for (let i = 1; i <= l_ori; ++i) {
        Dp[i][i] = 0;
    }


    // for (let i = 1; i <= l_ori; ++i) {
    //     Dp[i][i] = i;//guessing a single number costs this number
    // }
    for (let i = 2; i <= l_ori; ++i) {//length of guessing
        for (let j = 1; j <= l_ori; ++j) {//beginning
            let k = j + i - 1;//ending (inclusive)
            if (k > l_ori) break;//ending is out of bound
            for (let l = j; l <= k; ++l) {//pivot (last number guessed)
                let c_left = (l - 1 - j >= 0) ? Dp[j][l - 1] : 0;
                let c_right = (k - (l + 1) >= 0) ? Dp[l + 1][k] : 0;
                let _dp = l + Math.max(c_left, c_right);
                if (_dp < Dp[j][k]) {
                    Dp[j][k] = _dp;
                }
            }
        }
    }
    return Dp[1][l_ori];
};