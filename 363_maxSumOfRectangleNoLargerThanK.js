/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function (T, k) {
    let l_ti = T.length;
    let l_tj = T[0].length;
    let P = Array(l_ti * l_tj).fill(0);
    for (let i = 0; i < l_ti; ++i) {
        for (let j = 0; j < l_tj; ++j) {
            let k = i * l_tj + j;
            P[k] = T[i][j];
            if (i - 1 > -1) P[k] += P[(i - 1) * l_tj + j];
            if (j - 1 > -1) P[k] += P[i * l_tj + (j - 1)];
            if (i - 1 > -1 && j - 1 > -1) P[k] -= P[(i - 1) * l_tj + (j - 1)];
        }
    }
    let a = -Infinity;
    for (let i = 0; i < l_ti; ++i) {
        for (let j = 0; j < l_tj; ++j) {
            for (let i_ = i; i_ < l_ti; ++i_) {
                for (let j_ = j; j_ < l_tj; ++j_) {
                    let _a = P[i_ * l_tj + j_];
                    if (i - 1 > -1) _a -= P[(i - 1) * l_tj + j_];
                    if (j - 1 > -1) _a -= P[i_ * l_tj + (j - 1)];
                    if (i - 1 > -1 && j - 1 > -1) _a += P[(i - 1) * l_tj + (j - 1)];
                    if (_a <= k && _a > a) a = _a;
                }
            }
        }
    }
    return a;
};