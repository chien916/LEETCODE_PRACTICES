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
var doubleIt = function (H) {
    let n = 0n;
    for (let N = H; N; N = N.next) {
        n = n * 10n + BigInt(N.val);
    }
    n = n * 2n;
    let N = new ListNode(Number(n % 10n), null);//helper head
    n = n / 10n;
    while (n > 0n) {
        //console.log(n)
        N = new ListNode(Number(n % 10n), N);
        n = n / 10n;
    }
    return N;
};