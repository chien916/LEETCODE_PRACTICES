class ListNodeUtilities<Int> {
    companion object {
        @JvmStatic
        fun generateLinkedList(elements: Array<Int>): ListNode? {
            val d_head: ListNode = ListNode(Int.MIN_VALUE)
            var c_head: ListNode = d_head
            elements.forEach() {
                c_head.next = ListNode(it).also { c_head = it }
            }
            return d_head.next
        }

        @JvmStatic
        fun displayLinkedList(h: ListNode?) {
            var c_head: ListNode? = h
            while (c_head != null) {
                print("${c_head.`val`} -> ")
                c_head = c_head.next
            }
            println()
        }
    }
}