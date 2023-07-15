/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function (s1, s2) {
    [s1, s2] = ["!" + s1, "!" + s2];
    let [l_s1, l_s2] = [s1.length, s2.length];
    /**
     * Dp[i][0] ->  minimum number of ASCII SUM required to make word1 and "" the same.
     * -> delete all chars in word1
     * Dp[0][j] ->  minimum number of ASCII SUM required to make "" and word2 the same.
     * -> delete all chars in word2
     */
    let Dp = Array(l_s2).fill(0);
    for(let j = 1;j<l_s2;++j){
        Dp[j] = Dp[j - 1] + s2.charCodeAt(j);
    }
    for (let i = 1; i < l_s1; ++i) {
        let _Dp = Array(l_s2).fill(Infinity);
        let cc_1 = s1.charCodeAt(i);
        _Dp[0] = Dp[0] + cc_1;
        for (let j = 1; j < l_s2; ++j) {
            let cc_2 = s2.charCodeAt(j);
            if (!(cc_1 - cc_2)) {
                _Dp[j] = Dp[j - 1];//no deletion is needed
            } else {
                let _dp_d1 = Dp[j] + cc_1;//ignores a char in s1
                let _dp_d2 = _Dp[j - 1] + cc_2;//ignores a char in s2
                _Dp[j] = Math.min(_Dp[j], _dp_d1, _dp_d2);
            }
        }
        Dp = _Dp;
    }
    return Dp[l_s2 - 1];
};

console.log(minimumDeleteSum("sea","eat"))