/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (M) {
    let l_i = M.length;
    let l_j = M[0].length;
    let M_i = Array(l_i).fill(false);
    let M_j = Array(l_j).fill(false);
    for (let i = 0; i < l_i; ++i) {
        for (let j = 0; j < l_j; ++j) {
            if (!M[i][j]) {
                M_i[i] = M_j[j] = true;
            }
        }
    }
    for (let i = 0; i < l_i; ++i) {
        for (let j = 0; j < l_j; ++j) {
            if (M_i[i] || M_j[j]) M[i][j] = 0;
        }
    }

};