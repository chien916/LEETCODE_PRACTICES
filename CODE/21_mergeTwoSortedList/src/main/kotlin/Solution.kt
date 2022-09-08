/**
 * Example:
 * var li = ListNode(5)
 * var v = li.`val`
 * Definition for singly-linked list.*/

class ListNode(var `val`: Int) {
    var next: ListNode? = null
}

class Solution {
    fun mergeTwoLists(list1: ListNode?, list2: ListNode?): ListNode? {
        var list1 = list1
        var list2 = list2
        var list3: ListNode? = null
        var list3Backup = list3
        while (list1 != null || list2 != null) {
            val newNode: ListNode = ListNode(
                if ((list1?.`val` ?: Int.MAX_VALUE) < (list2?.`val` ?: Int.MAX_VALUE)) {
                    list1!!.also {
                        list1 = list1?.next
                    }.`val`
                } else {
                    list2!!.also {
                        list2 = list2?.next
                    }.`val`
                }
            )
            list3 = list3?.run {
                next = newNode;
                next
            } ?: newNode.also {
                list3Backup = it
            }
        }
        return list3Backup
    }
}