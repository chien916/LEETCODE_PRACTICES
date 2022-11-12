class ListNode(var `val`: Int) {
    var next: ListNode? = null
}

/*
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

OK
 */
class Solution {
    fun removeElements(head: ListNode?, `val`: Int): ListNode? {
        if (head == null) return null
        if (head.`val` == `val`) return removeElements(head.next, `val`)
        head.next = removeElements(head.next, `val`)
        return head
    }
}