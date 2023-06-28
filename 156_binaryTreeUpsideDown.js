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
 * @return {TreeNode}
 */
var upsideDownBinaryTree = function (T) {
    let [T_l, T_m, T_r, T_ln, T_rn] = [T, null, null, null, null];
    while (T_l) {
        // let [T_l_left, T_l_right] = [T_l.left, T_l.right]
        [T_ln, T_rn] = [T_l.left, T_l.right];
        [T_l.left, T_l.right] = [T_r, T_m];
        [T_l, T_m, T_r] = [T_ln, T_l, T_rn];
    }
    return T_m
};