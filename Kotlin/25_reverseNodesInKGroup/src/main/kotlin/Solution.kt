class Solution {
    private fun traversePeek(head: ListNode?, k: Int): ListNode? {
        var newHead = head
        for (i in 1 until k) {
            newHead = newHead?.next
        }
        return newHead
    }

    private fun reverseUntil(head: ListNode?, tail: ListNode?, prev: ListNode?): Pair<ListNode?, ListNode?> {
        val next: ListNode? = tail?.next
        var vPrev: ListNode? = next
        var vCurr: ListNode? = head
        var vNext: ListNode? = head?.next
        while (vPrev !== tail) {
            vCurr!!.next = vPrev
            vPrev = vCurr
            vCurr = vNext
            vNext = vCurr?.next
        }
        prev?.next = vPrev
        return Pair(vPrev, head)
    }

    fun reverseKGroup(head: ListNode?, k: Int): ListNode? {
        var rHead: ListNode? = null
        var vPrev: ListNode? = null
        var vHead: ListNode? = head
        var vTail: ListNode? = traversePeek(vHead, k)
        while (vTail !== null) {
            val reversedListPair = reverseUntil(vHead, vTail, vPrev)
            if (rHead === null) {
                rHead = reversedListPair.first
            }
            vPrev = reversedListPair.second
            vHead = vPrev?.next
            vTail = traversePeek(vHead, k)
        }
        return rHead
    }
}