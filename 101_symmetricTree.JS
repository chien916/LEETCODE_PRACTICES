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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    let isSymmetric = (node1_T, node2_T) => {
        return ((node1_T === null) === (node2_T === null))
            && (!node1_T || (node1_T.val === node2_T.val)
                && ((node1_T.left === null) === (node2_T.right === null))
                && (!node1_T.left || isSymmetric(node1_T.left, node2_T.right))
                && ((node1_T.right === null) === (node2_T.left === null))
                && (!node1_T.right || isSymmetric(node1_T.right, node2_T.left)));
    }
    return isSymmetric(root.left, root.right);
};
