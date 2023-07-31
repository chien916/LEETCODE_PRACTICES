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
 * @return {number[][]}
 */
var levelOrderBottom = function (R) {

    //BST
    let Q = [];
    let A_h = [];
    if (R) Q.push([R, 0]);
    while (Q.length > 0) {
        let [N, l] = Q.shift();
        A_h.push([N.val, l]);
        if (N.left) Q.push([N.left, l + 1]);
        if (N.right) Q.push([N.right, l + 1]);
    }
    //answer formation
    let A = [];
    for (let i = 0; A_h.length > 0; ++i) {
        let _A = [];
        while (A_h.length > 0 && A_h[0][1] === i) _A.push(A_h.shift()[0]);
        A.unshift(_A);
    }
    return A;

};