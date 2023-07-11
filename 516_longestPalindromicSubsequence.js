/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
    s = [...s];
    /**
     * Dp[i][j] -> length of longest pali subseq. from s[i:j] exclusively
     */
    let Dp = new Map();
    for (let i = 0; i < s.length; ++i) {
        //single character is always palind
        Dp.set(`${i},${i + 1}`, 1);
    }
    for (let i = 0; i < s.length - 1; ++i) {
        //dual chars depends on itself
        Dp.set(`${i},${i + 2}`, s[i] === s[i + 1] ? 2 : 1);
    }
    for (let i = 3; i <= s.length; ++i) {//length of sliding window
        //more chars depends on previous states
        //[0 1]2 /3
        // 0[1 2]/3
        // 0[1]2 /3
        for (let [l, r] = [0, i]; r <= s.length;) {//
            //console.log(`${l},${r}`);
            let key = `${l},${r}`;
            let key_m = `${l + 1},${r - 1}`;
            let key_l = `${l},${r - 1}`;
            let key_r = `${l + 1},${r}`;
            Dp.set(
                key,
                s[l] === s[r-1]
                    ? (Dp.get(key_m) + 2)
                    : Math.max(Dp.get(key_l), Dp.get(key_r))
            );
            ++l;
            ++r;
        }
    }
    //console.log([...Dp])
    let ans = Dp.get(`0,${s.length}`);
    return ans;
};