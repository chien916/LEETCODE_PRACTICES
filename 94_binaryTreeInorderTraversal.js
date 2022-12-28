/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
import { TreeNode } from "./util";
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if(!root) return [];
    let res_nA = [];
    let printNode_f = (node_T) =>{
        if(node_T.left) printNode_f(node_T.left);
        res_nA.push(node_T.val);
        if(node_T.right) printNode_f(node_T.right);
    }
    printNode_f(root);
    return res_nA;
};
