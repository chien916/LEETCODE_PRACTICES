/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
    //DP::DUAL_SEQUENCE
    [s, t] = ["!" + s, "!" + t];
    let [l_s, l_t] = [s.length, t.length];
    if (l_s < l_t) return 0;
    if (s === t) return 1;
    let Dp = Array(l_t).fill(0);
    /**
     * DP::DS Boundary Cases:
     * Dp[0][j] -> empty s non-empty t -> 
     * Dp[i][0]
     */
    Dp[0] = 1;//1 way to generate both empty string -> init driver
    for (let i = 1; i < l_s; ++i) {//for each char in s
        let _Dp = Array(l_t).fill(0);
        _Dp[0] = 1;
        for (let j = 1; j < l_t; ++j) {//for each char in t
            if (s.charCodeAt(i) === t.charCodeAt(j)) {
                //_Dp[j]: maybe there already exist solutions without including the current char in s
                _Dp[j] = Dp[j] + Dp[j - 1];
            } else {
                _Dp[j] = Dp[j];//ignore the current char in s
            }
        }
        Dp = _Dp;
    }
    return Dp[l_t - 1];
};