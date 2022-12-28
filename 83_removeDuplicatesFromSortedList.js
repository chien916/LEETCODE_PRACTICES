/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

let ListNode = require("./_util").ListNode;
let asList = require("./_util").asList;

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (!head || !head.next) return head;//boundary case
    let firs_L = head;//to be returned
    let curr_L = head;
    let prev_L = null;
    while (curr_L &&curr_L.next) {
        if(curr_L.val === curr_L.next.val){
            while (curr_L.next && curr_L.val === curr_L.next.val) {
                curr_L = curr_L.next;
            }
            // console.log(curr_L)
            if (!prev_L) {
                firs_L = curr_L;
            } else {
                prev_L.next = curr_L;
            }

        }
        prev_L = curr_L;
        curr_L = curr_L.next;
    }
    return firs_L;
};

let input = asList([1,1,2,3,3,3]);
let result = deleteDuplicates(input);
console.log(result);
