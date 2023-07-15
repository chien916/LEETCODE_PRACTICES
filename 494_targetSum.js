/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (N, t) {
    /**
     * DP::KNAPSACK
     * Dp[s] -> number of ways to form s (reduced i)
     */
    let Dp = new Map();
    Dp.set(0, 1);
    let s_min = N.reduce((p, v) => p + (Math.min(v, -v)), 0);
    let s_max = N.reduce((p, v) => p + (Math.max(v, -v)), 0);
    for (let i = 0; i < N.length; ++i) {
        for (let s = s_min; s <= s_max; ++s) {
            for (let _n of [N[i], -N[i]]) {//try using -/ + sign
                let _d = s - _n;
                if (Dp.has(_d)) {
                    if (!Dp.has(s)) Dp.set(s, 0);
                    Dp.set(s, Dp.get(s) + Dp.get(_d));
                    console.log(`set dp[${s}] to ${Dp.get(s)}`)
                }else{
                    console.log(`when s = ${s} no ${_d}`)
                }
                let i = 0;
            }
        }
    }
    if (!Dp.has(t)) return 0;
    else return Dp.get(t);
};
console.log(findTargetSumWays([1, 1, 1, 1, 1], 3))