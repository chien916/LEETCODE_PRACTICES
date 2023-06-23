/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (mat, k) {
    let [sum_lo, sum_hi] = [0, 5000 * 40]
    while (sum_lo < sum_hi) {
        let sum_mid = sum_lo + Math.floor((sum_hi - sum_lo) / 2)
        let _k = 0
        let dfs = (i, _sum) => {
            for (let j = 0; j < mat[i].length && _sum + mat[i][j] <= sum_mid; ++j) {
                /**
                 * _k_ = _k means after adding mat[i][j], no solution is found
                 * it's most likely b.c. the new sum is too big, path is dead
                 * stop the path immediately
                 * even after sum+mat[i][j] is okay during current iteration
                 */
                let _k_ = _k//speed dfs up
                if (i + 1 < mat.length) dfs(i + 1, _sum + mat[i][j])
                else ++_k
                if (_k >= k || _k_ === _k) break
            }
        }
        dfs(0, 0)
        //console.log(`${sum_mid} -> ${_k}`)
        if (_k === k) sum_hi = sum_mid
        else sum_lo = sum_mid + 1
    }
    return sum_lo
};
