/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (M) {
    let s = 0;
    for (let i = 0; i < M.length; ++i) {
        s += M[i][i];
        s += M[i][M.length - 1 - i];
        //console.log(M.length - 1 - i)
    }
    //console.log(s)
    if (M.length % 2) {
        let i_m = (M.length) >>> 1;
        s -= M[i_m][i_m];
    }
    return s;
};