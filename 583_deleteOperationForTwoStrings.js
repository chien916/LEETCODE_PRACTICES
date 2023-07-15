/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (s1, s2) {
    [s1, s2] = ["!" + s1, "!" + s2];
    let [l_s1, l_s2] = [s1.length, s2.length];
    /**
     * Dp[i][0] ->  minimum number of steps required to make word1 and "" the same.
     * -> delete all chars in word1
     * Dp[0][j] ->  minimum number of steps required to make "" and word2 the same.
     * -> delete all chars in word2
     */
    let Dp = Array(l_s2).fill().map((_, j) => j);
    for (let i = 1; i < l_s1; ++i) {
        let _Dp = Array(l_s2).fill(Infinity);
        _Dp[0] = i;
        for (let j = 1; j < l_s2; ++j) {
            if (!(s1.charCodeAt(i) - s2.charCodeAt(j))) {//equal
                _Dp[j] = Math.min(_Dp[j], Dp[j - 1]);
            } else {
                let _dp_d1 = _Dp[j - 1];//ignore current char in word 1
                let _dp_d2 = Dp[j];//ignore current char in word 2
                _Dp[j] = Math.min(_Dp[j], _dp_d1 + 1, _dp_d2 + 1);
            }
        }
        Dp = _Dp;
    }
    return Dp[l_s2 - 1];

};