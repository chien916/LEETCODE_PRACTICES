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
 * @return {number}
 */
var sumNumbers = function (R) {
    let a = 0;
    let s_dfs = (N, _n_id = 0) => {
        let _n_id_ = _n_id * 10 + N.val;
        if (!N.left && !N.right) a += (_n_id_);
        if (N.left) s_dfs(N.left, _n_id_);
        if (N.right) s_dfs(N.right, _n_id_);
    }
    if (R) s_dfs(R);
    return a;
};