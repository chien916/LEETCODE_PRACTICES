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
var longestConsecutive = function (T) {
    //count sequence -> start from 2!
    let ans = 0
    let _dfs = (T, n) => {
        if (n > ans) ans = n
        if (T.left) _dfs(T.left, (T.left.val - T.val === 1) ? (n + 1) : 1)
        if (T.right) _dfs(T.right, (T.right.val - T.val === 1) ? (n + 1) : 1)
    }
    _dfs(T, 1)
    return ans
};