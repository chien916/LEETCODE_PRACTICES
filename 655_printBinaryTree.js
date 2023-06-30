/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
var printTree = function (R) {
    //get height of tree (1-beginning)
    let dfs = (_T, _h = 1) => {
        return Math.max(
            ((_T.left) ? dfs(_T.left, _h + 1) : 0),
            ((_T.right) ? dfs(_T.right, _h + 1) : 0),
            _h
        );
    }
    let h = R ? dfs(R) : 0;
    let w = 2 ** h - 1;
    let Ans = Array(h).fill().map(()=>Array(w).fill().map(() => ""));
    //0<=i<h 0<=j<w
    let dfs2 = (_T, i, j_lo, j_hi) => {//j_lo and j_hi is inclusive
        let j_mid = j_lo + ((j_hi - j_lo) >>> 1);
        Ans[i][j_mid] = _T.val.toString();
        if (_T.left) dfs2(_T.left, i + 1, j_lo, j_mid - 1);
        if (_T.right) dfs2(_T.right, i + 1, j_mid + 1, j_hi);
    }
    if (R) dfs2(R, 0, 0, w - 1);
    return Ans;
};