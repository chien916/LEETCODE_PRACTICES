/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
let utils = require("./_util");
let ListNode = utils.ListNode;
let asList = utils.asList;
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
	if (head === null) return null;
	let currHeadNode_L = head;
	let currTailNode_L = head;
	let currCount = 1;
	//find tail node:
	while (currTailNode_L.next !== null) {
		currTailNode_L = currTailNode_L.next;
		++currCount;
	}
	//get new rotation number
	while (k >= currCount) {
		k -= currCount;
	}
	//rotate:
	for (let i = 0; i < currCount - k; ++i) {
		currTailNode_L.next = currHeadNode_L;
		currHeadNode_L = currHeadNode_L.next;
		currTailNode_L.next.next = null;
		currTailNode_L = currTailNode_L.next;
	}
	return currHeadNode_L;
};
rotateRight(asList([1, 2, 3, 4, 5]), 2);