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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (T) {
    let Q = []
    let _T = T
    while (_T) {
        if (_T.right)
            Q.push(_T.right);
        [_T.left, _T.right] = [null, _T.left]
        if (!_T.right && Q.length > 0)
            _T.right = Q.pop()
        _T = _T.right
    }
};