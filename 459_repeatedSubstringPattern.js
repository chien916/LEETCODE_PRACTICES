/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    for (let l = 1; l <= s.length - 1; ++l) {
        if (s.length % l > 0) continue;
        let s_ = s.slice(0, l);
        let b = true;
        for (let i = 1; b && i < s.length / l; ++i) {
            let s__ = s.slice(i * l, (i + 1) * l);
            // console.log(s_,s__);
            b = s__ === s_;
        }
        if (b) return true;
    }
    return false;
};

repeatedSubstringPattern("ababababab")