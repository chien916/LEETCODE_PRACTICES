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
var oddEvenList = function (head) {
    if (!head || !head.next) return head;
    const EVENHEAD = head.next;
    for (let currOdd = head; ; ) {
        //currOdd currOdd.next are guaranteed to be not null
        let currEven = currOdd.next;
        currOdd.next = currOdd.next.next;
        currEven.next = currEven.next ? currEven.next.next : null;
        if (currOdd.next&&!currOdd.next.next) {
            currOdd.next.next = EVENHEAD;
            break;
        }else if(!currOdd.next){
            currOdd.next = EVENHEAD;
            break;
        }
        currOdd = currOdd.next;
    }
    return head;
};

//链表类题型结构定义
let util = require("./_util");
let ListNode = util.ListNode;
let formLinkedList = util.formLinkedList;

oddEvenList(formLinkedList([1,2,3,4,5,6,7,8]));