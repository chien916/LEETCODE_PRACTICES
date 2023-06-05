/**
 * @param {string} s
 * @return {string}
 */
var longestPrefix = function (s) {
    // -> KMP Structure Pre-processing
    /**
     * dp[i] means the longest length of prefix and suffix identical from s[0:i] 
     * 
     * State Transfer:
     * dp[i-1] = j which s[0:j] === s[:-j], so it always include s[i-1]
     * If s[j+1] != s[i], we cannot use dp[i-1] as prefix and suffix will be different for last char
     * Try dp[j-1] (or make j-1 the new i) and see if s[dp[j-1]+1] == s[i-1]. Don't ask why just memorize!
     * Stop when dp[] =0 , in this way we cannot find a prefix and suffix satisfying the condition
     */
    let _dp_a = [0];
    for (let i_n = 1; i_n < s.length; ++i_n) {//starting from 1 because i-1 is needed
        _dp_a[i_n] = _dp_a[i_n - 1];//before i, the length of good prefix-suffix (temporarily stored in dp[i])
        while (_dp_a[i_n] > 0//boundary cond: no prefix-suffix can be used from previous iterations
            && s.charAt(i_n) !== s.charAt(_dp_a[i_n]))//s[j] is the first character OUT OF prefix
            _dp_a[i_n] = _dp_a[_dp_a[i_n] - 1];//next iteration 
        //After the while loop, the j either points to dp[0] -> no prefix-suffix available from previous
        //This is useful to determine the length of prefix-suffix EXCLUDING the current character!!!
        //However, it's possible that the current character and starting character (or the first OUT OF prefix char)
        //is the same as current char (s[i])
        if (s.charAt(i_n) === s.charAt(_dp_a[i_n])) ++_dp_a[i_n];
    }
    // -> OUTPUT FORMATION
    return s.substring(0,_dp_a[_dp_a.length-1]);
};