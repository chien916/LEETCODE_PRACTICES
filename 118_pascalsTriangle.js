/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let res_nAA = [];
    for (let currRowInd_n = 0; currRowInd_n < numRows; ++currRowInd_n) {
        if (currRowInd_n === 0) {
            res_nAA[0] = [1];
            continue;
        }
        else if (currRowInd_n === 1) {
            res_nAA[1] = [1, 1];
            continue;
        }
        let currRow_nA = res_nAA[currRowInd_n] = [];
        for (let currColInd_n = 0; currColInd_n
            < res_nAA[currRowInd_n - 1].length + 1; ++currColInd_n) {
            if (currColInd_n === 0
                || currColInd_n === res_nAA[currRowInd_n - 1].length) {
                currRow_nA[currColInd_n] = 1;
                continue;
            }
            currRow_nA[currColInd_n]
                = res_nAA[currRowInd_n - 1][currColInd_n - 1]
                + res_nAA[currRowInd_n - 1][currColInd_n];
        }
    }
    return res_nAA;
};
