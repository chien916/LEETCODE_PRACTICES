class ListNode(var `val`: Int) {
    var next: ListNode? = null
}

//https://www.youtube.com/watch?v=XgABnoJLtG4&ab_channel=NesoAcademy
class Solution {
    fun reverseList(head: ListNode?): ListNode? {
        var prev: ListNode? = null
        var curr: ListNode? = head
        var next: ListNode? = head?.next
        while (curr != null) {
            curr.next = prev
            prev = curr
            curr = next
            next = curr?.next
        }
        return prev
    }
}