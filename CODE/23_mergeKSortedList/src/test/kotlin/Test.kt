fun main() {
    val list1 = ListNode(1).apply { next = ListNode(2).apply { next = ListNode(4) } }
    println(list1)
}