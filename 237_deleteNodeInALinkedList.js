/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
let ListNode = require("./_util").ListNode;

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    let curr_N = node;
    let prev_N = null;
    while(curr_N&&curr_N.next){
        curr_N.val = curr_N.next.val;
        prev_N = curr_N;
        curr_N = curr_N.next;
    }
    prev_N.next = null;
};