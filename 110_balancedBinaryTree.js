/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
let util = require("./_util");
let TreeNode = util.TreeNode;
let formBinaryTree = util.formBinaryTree;
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    let isBalanced_f = (node1_T, node2_T) => {
        //currLayer,isBalanced
        let resLeft_$A = node1_T
            ? isBalanced_f(node1_T.left, node1_T.right)
            : [0, true];
        let resRight_$A = node2_T
            ? isBalanced_f(node2_T.left, node2_T.right)
            : [0, true];
        let isDiffNoMoreThanOne_b = Math.abs(resLeft_$A[0] - resRight_$A[0]) <= 1;
        let res_$A = [Math.max(resLeft_$A[0], resRight_$A[0]) + 1, isDiffNoMoreThanOne_b && resLeft_$A[1] && resRight_$A[1]];
        return res_$A;
    }
    if (!root) return true;
    else {
        let res_$A = isBalanced_f(root.left, root.right);
        return res_$A[1];
    }
};

console.log(isBalanced(formBinaryTree([3, 9, 20, null, null, 15, 7])));

