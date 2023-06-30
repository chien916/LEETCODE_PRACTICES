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
 * @return {number[]}
 */
var boundaryOfBinaryTree = function (T) {
    /**
     * Observation:
     * What goes into left bin:
     * Not a leaf node && strictly left child
     * What goes into botton bin:
     * Is a leaf node
     * What goes into right bin
     * Not a leaf node && strictly right child
     * 
     */
    let [Le, Bo, Ri] = [[], [], []];
    let dfs = (T, le = true, ri = true) => {
        //
        if (!T.left && !T.right) Bo.push(T.val);
        else if (le) Le.push(T.val);
        else if (ri) Ri.unshift(T.val);
        //console.log(`At ${T.val} : ${Le} | ${Bo} | ${Ri}`);
        //
        if (T.left) {
            if (le) dfs(T.left, true, false);
            else if (ri && !T.right) dfs(T.left, false, true);
            else dfs(T.left, false, false);
        }
        if (T.right) {
            if (ri) dfs(T.right, false, true);
            else if (le && !T.left) dfs(T.right, true, false);
            else dfs(T.right, false, false);
        }
    }
    if (T) dfs(T);

    return [].concat(Le, Bo, Ri);
};