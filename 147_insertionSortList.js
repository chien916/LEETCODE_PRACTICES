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
var insertionSortList = function (H) {
    H = new ListNode(-Infinity, H);//add front helper
    for (let N = H; N; N = N.next) {
        if (!N.next) {
            N.next = new ListNode(Infinity, null);//add back helper
            break;
        }
    }
    for (let N = H; N.val < Infinity;) {
        //find the first decreasing node
        if (N.next.val < N.val) {
            let N_ = N.next;
            //disconenct this node 
            N.next = N_.next;
            N_.next = null;
            //find the right place to splice (scan from beginning)
            for (let N__ = H; N.val < Infinity; N__ = N__.next) {
                if (N__.next.val >= N_.val) {
                    N_.next = N__.next;
                    N__.next = N_;
                    break;
                }
            }
        } else {//keep looking at next until increasing
            N = N.next;
        }
    }
    for (let N = H; N.val < Infinity; N = N.next) {
        console.log(`${N.val} .next = ${N.next.val}`)
        if (N.next.val === Infinity) {
            N.next = null;//discard back helper
            console.log(`found`)
            break;
        }

    }
    H = H.next;//discard front healper
    return H;
};