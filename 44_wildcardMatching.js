/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    //DP::DUAL_SEQUENCES
    [s, p] = ["!" + s, "!" + p];
    const [l_s, l_p] = [s.length, p.length];
    let Dp = Array(l_p).fill(0);//first dimention is reduced

    Dp[0] = 1;
    for (let i = 1; Dp[i - 1] && i < l_p; ++i) {
        if (p.charAt(i) === "*") Dp[i] = 1;
    }

    for (let i = 1; i < l_s; ++i) {//for each character in s (string to be matched)
        const _Dp = Array(l_p).fill(0);
        for (let j = 1; j < l_p; ++j) {//for each character in p (matching pattern)
            if (p.charAt(j) === "*") {
                if (
                    Dp[j] || //skipping one (or more) characters from s
                    _Dp[j - 1]//ignore the * and no skipping
                ) {
                    _Dp[j] = 1;
                }//* 
            } else if (p.charAt(j) === "?" || p.charAt(j) === s.charAt(i)) {
                if (Dp[j - 1]) {//no skipping, strictly matching character wise.
                    _Dp[j] = 1;
                }
            }
        }
        Dp = _Dp;
    }

    return Dp[l_p - 1];

};

console.log(isMatch("aa", "a"))