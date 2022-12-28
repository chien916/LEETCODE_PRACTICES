/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    if (matrix.length === 0) return false;
    let [leftRowInd_n, rightRowInd_n] = [0, matrix.length];
    for (; rightRowInd_n - leftRowInd_n > 1;) {
        let midRowInd_n = Math.ceil((rightRowInd_n + leftRowInd_n) / 2);
        if (matrix[midRowInd_n][0] <= target) leftRowInd_n = midRowInd_n;
        else rightRowInd_n = midRowInd_n;
    }
    let [leftColInd_n, rightColInd_n] = [0, matrix[leftRowInd_n].length];
    for (; rightColInd_n - leftColInd_n > 1;) {
        let midColInd_n = Math.ceil((rightColInd_n + leftColInd_n) / 2);
        if (matrix[leftRowInd_n][midColInd_n] <= target) leftColInd_n = midColInd_n;
        else rightColInd_n = midColInd_n;
    }
    if (matrix[leftRowInd_n][leftColInd_n] === target) return true;
    else if (matrix[leftRowInd_n][rightColInd_n] === target) return true;
    else return false;

};
