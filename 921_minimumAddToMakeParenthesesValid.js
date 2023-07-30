/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
    let v = 0;
    let a = 0;
    for (let i = 0; i < s.length; ++i) {
        if (s.charAt(i) === ")") {
            --v;
        } else {
            ++v;
        }
        if (v < 0) {
            a += -v;
            v = 0;
        }
    }
    a += v;
    return a;
};