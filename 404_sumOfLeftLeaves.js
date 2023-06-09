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
var sumOfLeftLeaves = function (root) {
    let _ret_n = 0;
    let _dfs_f = (node) => {
        if (node.left !== null){
            _dfs_f(node.left);
            if(node.left.left===null&&node.left.right===null) _ret_n += node.left.val;
        }
        if (node.right !== null) _dfs_f(node.right);
    }
    if (root !== null) _dfs_f(root);
    return _ret_n;
};