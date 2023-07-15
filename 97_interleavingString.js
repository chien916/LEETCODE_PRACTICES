/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    //DP::DUAL_SEQUENCE
    [s1, s2, s3] = ["!" + s1, "!" + s2, "!" + s3];
    const [l_s1, l_s2, l_s3] = [s1.length, s2.length, s3.length];
    if (l_s1 + l_s2 - 2 !== l_s3 - 1) return false;
    let Dp = Array(l_s2).fill(false);//2d dp reduced to 1d dp
    Dp[0] = true;
    for (let j = 1; j < l_s2; ++j) {
        Dp[j] = Dp[j - 1] && s2.charCodeAt(j) === s3.charCodeAt(j)
    }
    for (let i = 1; i < l_s1; ++i) {
        const _c1 = s1.charCodeAt(i);
        const _Dp = Array(l_s2).fill(false);
        _Dp[0] = Dp[0] && _c1 === s3.charCodeAt(i);
        for (let j = 1; j < l_s2; ++j) {

            const _c2 = s2.charCodeAt(j);
            const _c3 = s3.charCodeAt(i + j);
            _Dp[j] =
                (_c1 === _c3 && Dp[j]) ||
                (_c2 === _c3 && _Dp[j - 1]);
        }
        Dp = _Dp;
    }
    return Dp[l_s2 - 1];
};