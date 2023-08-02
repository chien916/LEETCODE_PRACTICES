/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (H) {
    let A = [];
    for (let N = H; N; N = N.next) {
        A.push(N);
    }
    let H_ = new ListNode(Infinity, null);
    let H_b = H_;
    for (let f = true; A.length; f = !f) {
        let N = f ? A.shift() : A.pop();
        H_ = H_.next = N;
        H_.next = null;
    }

    return H_b.next;
};


//链表类题型结构定义
let util = require("./_util");
let ListNode = util.ListNode;
let formLinkedList = util.formLinkedList;