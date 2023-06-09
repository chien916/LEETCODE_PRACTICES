/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let _dfs_f = (cX_n, cY_n) => {
        if (matrix[cX_n] === undefined || matrix[cX_n][cY_n] === undefined) return false;
        let curr_n = matrix[cX_n][cY_n];
        matrix[cX_n][cY_n] = undefined;//mark as traversed
        if (curr_n === target) return true;
        else if (curr_n > target) {
            //can only go up or left
            return _dfs_f(cX_n - 1, cY_n) || _dfs_f(cX_n, cY_n - 1);
        } else {
            return _dfs_f(cX_n + 1, cY_n) || _dfs_f(cX_n, cY_n + 1);
        }
    }
    return _dfs_f(0,0);
};