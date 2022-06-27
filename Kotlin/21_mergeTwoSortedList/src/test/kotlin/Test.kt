typealias l = ListNode

fun main() {
    val l1 = l(1).apply { next = l(2).apply { next = l(4) } }
    val l2 = l(1).apply { next = l(3).apply { next = l(4) } }
    val re = Solution().mergeTwoLists(l1, l2)
}