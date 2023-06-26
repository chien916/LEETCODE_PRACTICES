/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
    let _dfs = (i_lo, i_hi) => {
        let Ans = []
        if (i_lo > i_hi) Ans.push(null)
        for (let i = i_lo; i <= i_hi; ++i) {
            let Lefts = _dfs(i_lo, i - 1)
            let Rights = _dfs(i + 1, i_hi)
            for (let Left of Lefts) {
                for (let Right of Rights) {
                    Ans.push(new TreeNode(i, Left, Right))
                }
            }
        }
        return Ans
    }
    return _dfs(1,n)
};


const { isNull } = require("lodash");
//二叉树类题型结构定义
let util = require("./_util");
let TreeNode = util.TreeNode;
let formBinaryTree = util.formBinaryTree;
