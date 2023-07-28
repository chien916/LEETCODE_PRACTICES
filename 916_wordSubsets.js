/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (V_1, V_2) {
    //let [l_1, l_2] = [V_1.length, V_2.length];
    let M = Array(26).fill(0);
    let f_g = (s) => s.charCodeAt(0) - "a".charCodeAt(0);
    for (let w of V_2) {
        let _M = Array(26).fill(0);
        for (let i = 0; i < w.length; ++i) {
            ++_M[f_g(w.charAt(i))];
        }
        for (let i = 0; i < 26; ++i) {
            M[i] = Math.max(M[i], _M[i]);
        }
    }
    let A = [];
    for (let w of V_1) {
        let _M = Array(26).fill(0);
        for (let i = 0; i < w.length; ++i) {
            ++_M[f_g(w.charAt(i))];
        }
        let b = true;
        for (let i = 0; b && i < 26; ++i) {
            if (_M[i] < M[i]) b = false;
        }
        if (b) A.push(w);
    }
    return A;
};