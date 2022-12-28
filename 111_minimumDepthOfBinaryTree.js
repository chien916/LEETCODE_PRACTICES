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
 * @return {number}
 */
var minDepth = function (root) {
    if (!root) return 0;
    let getDepth_f = (node_T) => {
        if (!node_T.left && !node_T.right) return 1;
        else return Math.min(node_T.left ? getDepth_f(node_T.left) : 10e6, node_T.right ? getDepth_f(node_T.right) : 10e6) + 1;
    }
    // if(!root.left&&!root.right) return 1;
    return getDepth_f(root);
};
