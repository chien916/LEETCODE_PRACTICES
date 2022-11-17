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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
	return reverseLinkedList_f_Na(head, 0, left - 1, right);
};

var reverseLinkedList_f_Na = (currNode_N, currInd_n, leftInd_n, rightInd_n) => {
	if (currNode_N === null)
		return [null, null];
	if (currInd_n + 1 === rightInd_n)
		return currNode_N;
	if (currInd_n < leftInd_n) {
		currNode_N.next = reverseLinkedList_f_Na(currNode_N.next, currInd_n + 1, leftInd_n, rightInd_n);
		return currNode_N;
	}
	let rightMostNode_N = reverseLinkedList_f_Na(currNode_N.next, currInd_n + 1, leftInd_n, rightInd_n);
	let _currNode_next_N = currNode_N.next;
	currNode_N.next = _currNode_next_N.next;
	_currNode_next_N.next = currNode_N;
	return rightMostNode_N;
}

// let a = asList([1, 2, 3, 4, 5]);
// console.log(a);