/**
 * Example:
 * var li = ListNode(5)
 * var v = li.`val`
 * Definition for singly-linked list.
 * class ListNode(var `val`: Int) {
 *     var next: ListNode? = null
 * }
 */
class ListNode(var `val`: Int) {
    var next: ListNode? = null
}

class Solution {
    fun reverseList(_head: ListNode?, k: Int): ListNode? {
        var head: ListNode? = _head
        var lastH
        var swapCount: Int = 0
        while (swapCount < k) {
            head?.let { h ->
                h.next?.let { hn ->
                    hn.next = h
                } ?: let {
                    return h
                }
            } ?: let {
                return reverseList(head)
            }
        }
    }

    fun reverseKGroup(head: ListNode?, k: Int): ListNode? {
        //handle first case


    }
}