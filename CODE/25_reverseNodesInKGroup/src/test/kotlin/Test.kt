fun main() {
    val test_listNode = ListNodeUtilities.generateLinkedList(arrayOf(1, 2, 3, 4, 5))
    val test_sol_result = Solution().reverseKGroup(test_listNode, 2)
    println(test_listNode)
}
