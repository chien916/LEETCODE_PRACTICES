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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (R, t) {
    let A = [];
    let s_dfs = (N, _s = 0, _p = []) => {
        let _p_ = [..._p, N.val]
        console.log(_p_);
        if (!N.left && !N.right && N.val + _s === t) {
            A.push(_p_);
            return;
        }
        if (N.left) s_dfs(N.left, _s + N.val, _p_);
        if (N.right) s_dfs(N.right, _s + N.val, _p_);
    }
    if (R) s_dfs(R);
    return A;
};