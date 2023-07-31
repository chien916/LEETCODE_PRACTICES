/**
 * @param {number} n
 * @return {number[]}
 */
var beautifulArray = function (n) {
    let Dp = Array(n + 1).fill();
    Dp[1] = [1];
    for (let i = 2; i <= n; ++i) {
        let Dp_l = Dp[(i + 1) >>> 1].map((v) => 2 * v - 1);
        let Dp_r = Dp[i >>> 1].map((v) => 2 * v);
        Dp[i] = [...Dp_l, ...Dp_r];
    }
    return Dp[n];

};