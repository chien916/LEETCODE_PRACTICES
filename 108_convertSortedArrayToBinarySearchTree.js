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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    let formTree_f = (array_nA) => {
        if (array_nA.length === 0) {
            return null;
        }
        // else if (array_nA.length === 1) {
        //     return new TreeNode(array_nA[0]
        //         , null
        //         , null);
        // }
        // else if (array_nA.length === 2) {
        //     return new TreeNode(array_nA[1]
        //         , new TreeNode(array_nA[0], null, null)
        //         , null);
        // }
        // else if (array_nA.length === 3) {
        //     return new TreeNode(array_nA[1]
        //         , new TreeNode(array_nA[0], null, null)
        //         , new TreeNode(array_nA[2], null, null));
        // }
    let midRightInd_n = Math.ceil(array_nA.length / 2)-1;
        return new TreeNode(array_nA[midRightInd_n]
            , formTree_f(array_nA.slice(0, midRightInd_n))
            , formTree_f(array_nA.slice(midRightInd_n + 1,array_nA.length)));
    }
    return formTree_f(nums);
};
