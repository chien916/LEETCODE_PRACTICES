/**
 * Example:
 * var li = ListNode(5)
 * var v = li.`val`
 * Definition for singly-linked list.*/
class ListNode(var `val`: Int) {
    var next: ListNode? = null
}

class Solution {
    fun swapPairs(head: ListNode?): ListNode? {
        var headNode: ListNode? = null
        var loopEnable: Boolean = true
        var lastNode: ListNode = ListNode(0).also { it.next = head ?: let { loopEnable = false;null } }

        while (loopEnable) {
            lastNode.next = lastNode.next?.let { firstNode ->
                firstNode.next?.let { secondNode ->
                    firstNode.next = secondNode.let { it.next ?: let { loopEnable = false;null } }
                    secondNode.next = firstNode
                    lastNode = firstNode
                    headNode ?: let { headNode = secondNode }
                    secondNode
                } ?: firstNode.also { loopEnable = false;headNode ?: let { headNode = firstNode } }
            }
        }
        return headNode
    }
}
