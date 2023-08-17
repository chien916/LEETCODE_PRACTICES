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
var sortList = function (H) {
	return insertionSortList(H);
};

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
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// var sortList = function (head) {
// 	if (head.next === null) return head;//only one element
// 	let [leftNode_N, rightNode_N] = [head, head.next];
// 	while (rightNode_N != null && rightNode_N.next != null) {//find middle point
// 		leftNode_N = leftNode_N.next;
// 		rightNode_N = rightNode_N.next.next;
// 	}
// 	rightNode_N = leftNode_N.next;//rightNode now becomes start of right list
// 	leftNode_N.next = null;//split list
// 	sortList(head);
// 	sortList(rightNode_N);
// 	let finalHead_N = undefined;
// 	let currentNode_N = undefined;
// 	while (leftNode_N != null || rightNode_N != null) {
// 		if (rightNode_N == null || leftNode_N!=null && leftNode_N.val < rightNode_N.val) {
// 			if (currentNode_N === undefined)
// 				finalHead_N = currentNode_N = leftNode_N;
// 			else {
// 				currentNode_N.next = leftNode_N;
// 				currentNode_N = currentNode_N.next;
// 			}
// 			leftNode_N = leftNode_N.next;
// 		} else {
// 			if (currentNode_N === undefined)
// 				finalHead_N = currentNode_N = rightNode_N;
// 			else {
// 				currentNode_N.next = rightNode_N;
// 				currentNode_N = currentNode_N.next;
// 			}
// 			rightNode_N = rightNode_N.next;
// 		}
// 	}
// 	return finalHead_N;
// };

// // /** INSERTION SORT -> TOO SLOW
// //  * @param {ListNode} head
// //  * @return {ListNode}
// //  */
// // var sortList = function (head) {
// // 	let finalHead_L = head;
// // 	let lastLeftNode_L = null;
// // 	let leftNode_L = head;
// // 	let lastRightNode_L = undefined;
// // 	let rightNode_L = undefined;
// // 	let lastMinNode_L = null;
// // 	let minNode_L = head;
// // 	while (leftNode_L != null) {//!
// // 		lastRightNode_L = lastLeftNode_L;
// // 		rightNode_L = leftNode_L;//!
// // 		while (rightNode_L != null) {//!
// // 			if (rightNode_L.val <= minNode_L.val) {
// // 				lastMinNode_L = lastRightNode_L;
// // 				minNode_L = rightNode_L;
// // 			}
// // 			lastRightNode_L = rightNode_L;
// // 			rightNode_L = rightNode_L.next;
// // 		}
// // 		if (lastLeftNode_L === null) {
// // 			finalHead_L = minNode_L;//!
// // 		} else {
// // 			lastLeftNode_L.next = minNode_L;
// // 		}
// // 		if(lastMinNode_L===null){
// // 			//DO NOTHING
// // 		} else{
// // 			lastMinNode_L.next = leftNode_L;//!
// // 		}
// // 		let helper_N = leftNode_L.next;
// // 		leftNode_L.next = minNode_L.next;
// // 		minNode_L.next = helper_N;
// // 		lastMinNode_L = lastLeftNode_L = minNode_L;
// // 		minNode_L = leftNode_L = minNode_L.next;
// // 	}
// // 	return finalHead_L;
// // };

// sortList(asList([4, 2, 1, 3]));