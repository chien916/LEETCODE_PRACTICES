/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (H) {
    if (!H) return null;
    let V_l = [];
    for (let N = H; N; N = N.next) {
        V_l.push(N.val);
    }
    let dfs = (V) => {
        let i_m = ((V.length - 1) >>> 1);
        let N = new TreeNode(V[i_m], null, null);
        //console.log(V, i_m,V.slice(0, i_m),V.slice(i_m + 1));
        if (i_m - 1 > -1) N.left = dfs(V.slice(0, i_m));
        if (i_m + 1 < V.length) N.right = dfs(V.slice(i_m + 1));
        return N;
    }
    let N_a = dfs(V_l);
    return N_a;
};
