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
 * @return {number}
 */
var pathSum = function (T, t) {
    let ans = 0
    let dfs = (T, _sum = 0, _chain = ``) => {
        _sum += T.val
        _chain = `${_chain} -> ${T.val}`
       // console.log(_chain)
        if (_sum === t) ans += 1
        if (T.left) dfs(T.left, _sum, _chain)
        if (T.right) dfs(T.right, _sum, _chain)
    }
    let dfs2 = (T) => {
       // console.log('dfs2 ' + T.val)
        dfs(T)
        if (T.left) dfs2(T.left)
        if (T.right) dfs2(T.right)
    }
    if (T) dfs2(T)
    return ans
};

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @param {number} targetSum
//  * @return {number}
//  */
// var pathSum = function (T, t) {
//     let ans = 0
//     let M = new Map()//[sum,number of path]
//     let dfs = (T, _sum) => {
//         /**
//          * _sum + T.val = t
//          */
//         if(_sum-t = )
//     }
//     return ans
// };