/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (H, x) {
	let L = new ListNode(Infinity, null);
	let R = new ListNode(Infinity, null);
	const [L_b, R_b] = [L, R];
	for (let I = H; I; I = I.next) {
		if (I.val < x) L = L.next = new ListNode(I.val, null);
		else R = R.next = new ListNode(I.val, null);
	}
	L.next = R_b.next;
	return L_b.next;
};

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// let ListNode = require("./_util").ListNode;
// let asList = require("./_util").asList;
// /**
//  * @param {ListNode} head
//  * @param {number} x
//  * @return {ListNode}
//  */
// var partition = function (head, x) {
// 	let [currLeftNode_L, currRightNode_L, currOrigNode_L] = [undefined, undefined, head];
// 	let [firstLeftNode_L, firstRightNode_L] = [undefined, undefined];
// 	while (currOrigNode_L !== null) {
// 		if (currOrigNode_L.val < x) {//smaller -> go to left list
// 			if (currLeftNode_L === undefined) {
// 				currLeftNode_L = currOrigNode_L;
// 				firstLeftNode_L = currOrigNode_L;
// 			} else {
// 				currLeftNode_L.next = currOrigNode_L;
// 				currLeftNode_L = currLeftNode_L.next;
// 			}
// 		} else {
// 			if (currRightNode_L === undefined) {
// 				currRightNode_L = currOrigNode_L;
// 				firstRightNode_L = currOrigNode_L;
// 			} else {
// 				currRightNode_L.next = currOrigNode_L;
// 				currRightNode_L = currRightNode_L.next;
// 			}
// 		}
// 		currOrigNode_L = currOrigNode_L.next;
// 	}
// 	if (currLeftNode_L !== undefined) {
// 		currLeftNode_L.next = firstRightNode_L;
// 		return firstLeftNode_L;
// 	}else{
// 		return firstRightNode_L;
// 	}
// };

// partition(asList([1,4,3,2,5,2]),3);