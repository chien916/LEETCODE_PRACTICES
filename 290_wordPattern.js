/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let hm = new Map();
    let sm = new Set();
    s = s.split(" ");
    if(s.length!==pattern.length) return false;
    for (let i_n = 0; i_n < s.length; ++i_n) {
        if (hm.has(pattern[i_n])) {
            if (hm.get(pattern[i_n]) !== s[i_n]) return false;
        } else {
            if (sm.has(s[i_n])) return false;
            hm.set(pattern[i_n], s[i_n]);
            sm.add(s[i_n]);
        }
    }
    return true;
};