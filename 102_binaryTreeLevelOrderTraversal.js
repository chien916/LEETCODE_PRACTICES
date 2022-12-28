/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
//二叉树类题型结构定义
let util = require("./_util");
let TreeNode = util.TreeNode;
let formBinaryTree = util.formBinaryTree;

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    let res_nAA = [];
    let traverse_f = (node_T, currLayerInd_n) => {
        if (res_nAA[currLayerInd_n]===undefined) {
            res_nAA[currLayerInd_n] = [];
        }
        res_nAA[currLayerInd_n].push(node_T.val);
        if (node_T.left) {
            traverse_f(node_T.left, currLayerInd_n + 1);
        }
        if (node_T.right) {
            traverse_f(node_T.right, currLayerInd_n + 1);
        }
    }
    traverse_f(root,0);
    return res_nAA;
};
