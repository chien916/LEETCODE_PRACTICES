/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function (H) {
    let gcd = (a, b) => {
        while (b) {
            [a, b] = [b, a % b];
        }
        return Math.abs(a);
    }
    if (!H.next) return H;
    for (let [I, J] = [H, H.next]; J;) {
        I.next = new ListNode(gcd(I.val, J.val), J);
        I = J;
        J = J.next;
    }
    return H;
    

};