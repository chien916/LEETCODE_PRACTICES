class ListNode(var `val`: Int) {
    var next: ListNode? = null
}


class Solution {
    private fun mergeTwoLists(list1: ListNode?, list2: ListNode?): ListNode? {
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

    private fun mergeKLists(lists: Array<ListNode?>, startIndex: Int, endIndex: Int): ListNode? {
        return if (startIndex == endIndex) {
            lists[startIndex]
        } else if (startIndex + 1 == endIndex) {
            mergeTwoLists(lists[startIndex], lists[endIndex])
        } else {
            val midIndex = (startIndex + endIndex) / 2
            val list1 = mergeKLists(lists, startIndex, midIndex)
            val list2 = mergeKLists(lists, midIndex.inc(), endIndex)
            mergeTwoLists(list1, list2)
        }
    }

    fun mergeKLists(lists: Array<ListNode?>): ListNode? {
        return if (lists.isNotEmpty()) {
            mergeKLists(lists, 0, lists.lastIndex)
        } else {
            null
        }
    }
}
