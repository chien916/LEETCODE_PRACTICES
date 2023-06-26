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
 * @return {boolean}
 */
var isValidBST = function (T) {
    let _dfs = (T, min, max) => {
        let ret = T.val > min && T.val < max
            && (!T.left || _dfs(T.left, min, T.val))
            && (!T.right || _dfs(T.right, T.val, max))
        //console.log(`calling ${T.val} with min ${min} max ${max} -> ${ret}`)
        return ret
    }
    return _dfs(T, -Infinity, Inhfinity)
};