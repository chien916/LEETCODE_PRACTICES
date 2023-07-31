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
var maxPathSum = function (R) {
    let a = -Infinity;
    let s_dfs = (N) => {
        let [s_l, s_r] = [0, 0];
        if (N.left) s_l = Math.max(0, s_dfs(N.left));
        if (N.right) s_r = Math.max(0, s_dfs(N.right));
        a = Math.max(a, N.val + s_l + s_r);
        return Math.max(s_l, s_r) + N.val;
    }
    if (R) s_dfs(R);
    else return 0;
    return a;
};