/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
let ListNode = require("./_util").ListNode;

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
	if (head === null) return null;
	if (head.next === null) return head;
	let rightMostHead_N = reverseList(head.next);
	let _head_next = head.next;
	head.next = _head_next.next;
	_head_next.next=head;
	// head.next.next = head;
	// head.next = null;
	return rightMostHead_N;
};