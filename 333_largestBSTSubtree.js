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
var largestBSTSubtree = function (T) {
    let ans = 0;
    let dfs = (T) => {
        let Rl = T.left ? dfs(T.left) : null;
        let Rr = T.right ? dfs(T.right) : null;
        let count = 1;
        let Range = [T.val, T.val];
        if (Rl && Rl[1][1] < T.val) {
            count += Rl[0];
            Range[0] = Rl[1][0];
        } else if (Rl) return [0, [-Infinity, Infinity]];
        if (Rr && Rr[1][0] > T.val) {
            count += Rr[0];
            Range[1] = Rr[1][1];
        } else if (Rr) return [0, [-Infinity, Infinity]];
        if (count > ans) ans = count;//answer update
       // console.log(`At ${T.val} ${count} ${Range}`)
        return [count, Range];
    }
    if (T) dfs(T);
    return ans;
};