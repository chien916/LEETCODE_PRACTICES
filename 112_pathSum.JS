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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if(!root) return false;
    let findPathSum = (node_T, currSum_n) => {
       return (!node_T.left && !node_T.right) ?(currSum_n + node_T.val === targetSum):(node_T.left!=null && findPathSum(node_T.left, currSum_n + node_T.val) || node_T.right!==null && findPathSum(node_T.right, currSum_n + node_T.val));
    }
    return findPathSum(root,0);
}

//二叉树类题型结构定义
let util = require("./_util");
let TreeNode = util.TreeNode;
let formBinaryTree = util.formBinaryTree;

console.log(hasPathSum(formBinaryTree([1,2]),0));
