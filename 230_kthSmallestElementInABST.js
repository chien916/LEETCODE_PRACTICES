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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (R, k) {

    let dfs = (N, v) => {
        let a = 0;
        if (N.val < v) ++a;
        if (N.left) a += dfs(N.left, v);
        if (N.right) a += dfs(N.right, v);
        return a;
    }

    let [v_l, v_r] = [0, 1e4];
    while (v_l < v_r) {
        let v_m = v_l + Math.ceil((v_r - v_l) / 2);
        if (dfs(R, v_m) < k) v_l = v_m;
        else v_r = v_m - 1;
       // console.log(`guess ${v_m} yields ${dfs(R, v_m)}`)
    }

    return v_l;
};