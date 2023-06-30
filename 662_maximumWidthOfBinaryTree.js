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
 * @return {number}
 */
var widthOfBinaryTree = function (R) {
    let M_min = new Map();
    let M_max = new Map();
    let h_max = 0;
    let dfs = (T, i, h) => {
        h_max = Math.max(h_max, h);

        if (!M_min.has(h)) M_min.set(h, i);
        if (i < M_min.get(h)) M_min.set(h, i);

        if (!M_max.has(h)) M_max.set(h, i);
        if (i > M_max.get(h)) M_max.set(h, i);

        if (T.left) dfs(T.left, i * 2n + 1n, h + 1);
        if (T.right) dfs(T.right, i * 2n + 2n, h + 1);
    }
    if (R) dfs(R, 0n, 1);
    //answer formation
    let ans = 0n;
    for (let h = 1; h <= h_max; ++h) {
        console.log(M_max.get(h) + " " + M_min.get(h))
        let _ans = M_max.get(h) - M_min.get(h) + 1n;
        if (_ans > ans) ans = _ans;
    }
    return Number(ans);
};