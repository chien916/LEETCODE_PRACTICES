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

};
