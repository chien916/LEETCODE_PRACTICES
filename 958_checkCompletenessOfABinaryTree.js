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
var isCompleteTree = function (R) {
    let i_max = 0;
    let Q = [[R, 0]];
    while (Q.length > 0) {
        let [_T, _i] = Q.shift();
        console.log(i_max + " now: " + _i);
        if (_i !== (i_max)) return false;
        if (_T.left) Q.push([_T.left, _i * 2 + 1]);
        if (_T.right) Q.push([_T.right, _i * 2 + 2]);
        ++i_max;
    }
    return true;
};