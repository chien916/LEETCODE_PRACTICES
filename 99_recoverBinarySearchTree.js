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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (T) {
    /**
     * Theorm:
     * **Pre-order traversal of BST should be monotonically increasing
     * ------+-----------------
     * -----+------------------
     * ----+-------------------
     * ---+--------------------
     * --+---------------------
     * -+----------------------
     * +-----------------------
     * 
     * Case 1: Non Adjecent
     * ------+-----------------
     * -+---!------------------
     * ----+-------------------
     * ---+--------------------
     * --+---------------------
     * -!---+------------------
     * +-----------------------
     * Case 2: Adjecent
     * ------+-----------------
     * -----+------------------
     * ----+-------------------
     * --+---------------------
     * ---+--------------------
     * -+----------------------
     * +-----------------------
     * Case 3: Ending at Boundary
     * --+---------------------
     * ---+--------------------
     * -+----------------------
     * +-----------------------
     * 
     * Observation:
     * Two decrement should happen:
     * First decrement -> mark the element before decrement
     * Second decrement -> mark the element after decrement
     */

    //preorder traversal
    let I = []
    let dfs = (T) => {
        if (T.left) dfs(T.left)
        I.push(T)
        if (T.right) dfs(T.right)
    }
    dfs(T)
    console.log(I.map((T) => T.val))
    let [r1, r2] = [NaN, NaN]
    //state 0: no decrement found
    //state 1: 1st decrement found -> R <= T_l 
    //state 3: 2nd decrement found -> R' <= T_r
    let s = 0//state
    for (let i = 1; s < 3 && i < I.length; ++i) {//error: fsm condition check
        if (I[i].val < I[i - 1].val) ++s
        if (!(s - 1)) r1 = i - (s++)
        if (!(s - 3)) r2 = i
    }
    if (isNaN(r2)) r2 = r1 + 1;
    console.log([r1, r2]);
    if (!s) return
    let [v1, v2] = [I[r1].val, I[r2].val];
    [I[r1].val, I[r2].val] = [v2, v1]
};
// //二叉树类题型结构定义
// let util = require("./_util");
// let TreeNode = util.TreeNode;
// let formBinaryTree = util.formBinaryTree