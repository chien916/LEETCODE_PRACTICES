/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (s1, s2) {
    [s1, s2] = ["!" + s1, "!" + s2];
    let [l_s1, l_s2] = [s1.length, s2.length];
    let Dp = Array(l_s2).fill().map(
        (_, j) => j//changing everything of s1 char by char
    );
    for (let i = 1; i < l_s1; ++i) {
        let _Dp = Array(l_s2).fill().map(()=>Infinity);
        _Dp[0] = i;
        for (let j = 1; j < l_s2; ++j) {
            if (s1.charCodeAt(i) === s2.charCodeAt(j)) {
                _Dp[j] = Dp[j-1]//character match => no extra operation needed
            } else {
                let _dp_ins = _Dp[j - 1] + 1;
                let _dp_del = Dp[j - 1] + 1;
                let _dp_rep = Dp[j] + 1;
                _Dp[j] = Math.min(_Dp[j], _dp_ins, _dp_del, _dp_rep);
            }
        }
        Dp = _Dp;
    }
    return Dp[l_s2 - 1];
};