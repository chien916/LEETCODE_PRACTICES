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
var countNodes = function (T) {
    let ans = 0
    if(T===null) return 0
    let _dfs = (T) => {
        if (T.left !== null) _dfs(T.left)
        if (T.right !== null) _dfs(T.right)
        ++ans
    }
    _dfs(T)
    return ans
};