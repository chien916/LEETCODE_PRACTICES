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
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
=======
>>>>>>> 92e19e49d1ac0ff57194eb87bd36b120ea368cd4
    helper
    H = new ListNode(-Infinity, H);
    for (let N = H; N; N = N.next) {
        if (N.next = null) {
            N.next = new ListNode(Infinity, null);
            break;
        }
    }
    //fast and slow pointer
    /** 
     *  -inf 1 2 3 inf
     *  -inf 1 2 3 4 inf
     *  -inf 1 inf
     */
    let M_l, M_r;
    for (let [F, S, S_P] = [H, H, null]; F.val < Infinity && F.next.val < Infinity;) {

        S.next = S_P;
        S_P = S;
        S = S_P.next;
        [M_l, M_r] = [S_P, S];

        F = F.next.next;
    }

    let H_t = new TreeNode(M_l.val, left, right);
    M_l = M_l.next;
    for(;M_l.)

<<<<<<< HEAD
=======
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
>>>>>>> 4821a6ca7a487a5166fa29a0097731515d89df07
=======
>>>>>>> 42dce174ba7ade314b0a20e4a513561fcd069c37
>>>>>>> 92e19e49d1ac0ff57194eb87bd36b120ea368cd4
};
