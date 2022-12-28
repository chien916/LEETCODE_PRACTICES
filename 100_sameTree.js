/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
import { TreeNode } from "./_util"
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (!p || !q) return (!p && !q);
    let compareNode = (firstNode_T, secondNode_T) => {
        //compare the value
        if (firstNode_T.val !== secondNode_T.val)
            return false;
        //compare structure
        if ((firstNode_T.left === null) !== (secondNode_T.left === null))
            return false;
        if ((firstNode_T.right === null) !== (secondNode_T.right === null))
            return false;
        //compare left and right node if they are not null
        let res_b = true;
        if (firstNode_T.left)
            res_b &= compareNode(firstNode_T.left, secondNode_T.left);
        if (firstNode_T.right)
            res_b &= compareNode(firstNode_T.right, secondNode_T.right);
        return res_b;
    }
    return compareNode(p, q);
};
