/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function (n) {
    let l_ori = n;
    let l_adj = n + 2;
    let Dp = Array(l_adj).fill().map(
        () => Array(l_adj).fill(0)
    );
    for (let i = 1; i <= l_ori; ++i) {
        Dp[i][i] = i;//guessing a single number costs this number
    }
    for (let i = 1; i <= l_ori; ++i) {//length of guessing
        for (let j = 1; j <= l_ori; ++j) {//beginning
            let k = j + i - 1;//ending (inclusive)

        }
    }
};