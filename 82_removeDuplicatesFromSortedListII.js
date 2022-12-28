/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
let ListNode = require("./_util").ListNode;
let al = require("./_util").asList;

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
	let head_N = head;
	let curr_N = head;
	let prev_N = null;
	if (!head || !head.next) return head;
	while (curr_N&&curr_N.next) {
		if (curr_N.val === curr_N.next.val) {
			while (curr_N.next && curr_N.val === curr_N.next.val) {
				curr_N = curr_N.next;
			}
			if (!prev_N) {
				head_N = curr_N.next;
			} else {
				prev_N.next = curr_N.next;
			}
		}else{
			prev_N = curr_N;
		}
		curr_N = curr_N.next;
	}
	return head_N;
};

deleteDuplicates(al([1,2,3,3,4,4,5]));