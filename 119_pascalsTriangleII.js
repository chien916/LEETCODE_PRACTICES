/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    if (rowIndex === 0) return [1];
    else if (rowIndex === 1) return [1, 1];
    let res_nA = [1, 1];
    for (let currRowInd = 2; currRowInd <= rowIndex; ++currRowInd) {
        for (let currColInd_n = res_nA.length; currColInd_n >= 0; --currColInd_n) {
            if (currColInd_n === 0
                || currColInd_n === res_nA.length) {
                res_nA[currColInd_n] = 1;
                continue;
            }
            res_nA[currColInd_n]
                = res_nA[currColInd_n - 1]
                + res_nA[currColInd_n];
        }
    }
    return res_nA;
};
