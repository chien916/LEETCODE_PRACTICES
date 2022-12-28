/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
import { TreeNode } from "./_util";
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    let dig_f = (node_T, currCount_n) => {
        return node_T
            ? (Math.max(dig_f(node_T.left, currCount_n)
                , dig_f(node_T.right, currCount_n)) + 1)
            : currCount_n;
    }
    return dig_f(root,0);
};
