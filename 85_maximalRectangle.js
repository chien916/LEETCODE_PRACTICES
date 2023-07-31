/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (M) {
    let l_i = M.length;
    let l_j = M[0].length;
    let P = Array(l_i).fill().map(
        () => Array(l_j).fill()
    );
    for (let i = 0; i < l_i; ++i) {
        for (let j = 0; j < l_j; ++j) {
            P[i][j] = (M[i][j] === '1' ? 1 : 0);
            if (i - 1 > -1) P[i][j] += P[i - 1][j];
            if (j - 1 > -1) P[i][j] += P[i][j - 1];
            if (i - 1 > -1 && j - 1 > -1) P[i][j] -= P[i - 1][j - 1];
        }
    }
    let a = 0;
    for (let i = 0; i < l_i; ++i) {
        for (let j = 0; j < l_j; ++j) {
            for (let i_ = i; i_ < l_i; ++i_) {
                for (let j_ = j; j_ < l_j; ++j_) {
                    let _P = P[i_][j_];
                    if (i - 1 > -1) _P -= P[i - 1][j_];
                    if (j - 1 > -1) _P -= P[i_][j - 1];
                    if (i - 1 > -1 && j - 1 > -1) _P += P[i - 1][j - 1];
                    if (_P === (i_ - i + 1) * (j_ - j + 1) && _P > a) a = _P;
                }
            }
        }
    }
    return a;
};

//let p = [["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]];
let p = [["1", "1"], ["1", "1"]];
console.log(maximalRectangle(p));