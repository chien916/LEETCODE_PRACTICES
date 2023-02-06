const { formLinkedList } = require("./_util");

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
let ListNode = require("./_util").ListNode;
let gen = require("./_util").formLinkedList;
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    if (head === null) return false;
    if (head.next === null) return true;
    let left_N = head;
    let right_N = head.next;
    while (right_N !== null && right_N.next !== null) {
        left_N = left_N.next;
        right_N = right_N.next.next;
    }
    right_N = left_N.next;
    while (right_N !== null) {
        let helperNext_N = right_N.next;
        right_N.next = left_N;
        left_N = right_N;
        right_N = helperNext_N;
    }

    right_N = left_N;
    left_N = head;
    while (true) {
        if (left_N === right_N)
            return true;
        if (left_N.next === right_N)
            return left_N.val === right_N.val;
        if (left_N.val !== right_N.val)
            return false;
        left_N = left_N.next;
        right_N = right_N.next;
    }
};

isPalindrome(formLinkedList([1, 2]));