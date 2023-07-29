/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (V_s = ["vdy", "vei", "zvc", "zld"]) {
    let [l_i, l_j] = [V_s.length, V_s[0].length];
    let T = Array(l_i - 1).fill(false);
    let d = 0;//deletion count
    for (let j = 0; j < l_j; ++j) {
        let _T = [...T];
        let r = true;
        for (let i = 0; r && i < l_i - 1; ++i) {
            if (T[i]) continue;//unconditional pass
            let [c_u, c_d] = [V_s[i].charCodeAt(j), V_s[i + 1].charCodeAt(j)];
            if (c_u > c_d) {//delete this column
                ++d;
                r = false;
            }
            else if (c_u < c_d) {
                _T[i] = true;
            }
        }
        if (r) T = _T;
    }
    return d;
};

console.log(minDeletionSize())