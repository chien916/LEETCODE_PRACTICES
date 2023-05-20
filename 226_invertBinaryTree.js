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
var invertTree = function (root) {
    if(!root) return null;
    if (root.left) invertTree(root.left);
    if (root.right) invertTree(root.right);
    [root.left, root.right] = [root.right, root.left];
    return root;
};

//二叉树类题型结构定义
let util = require("./_util");
let TreeNode = util.TreeNode;
let formBinaryTree = util.formBinaryTree;
