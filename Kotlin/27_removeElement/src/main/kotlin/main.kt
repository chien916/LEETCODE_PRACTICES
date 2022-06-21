class Solution {
    fun removeElement(nums: IntArray, `val`: Int): Int {
        if (nums.isEmpty()) return 0
        var currInd: Int = 0
        var lastInd: Int = nums.size - 1
        nums.run {
            while (currInd <= lastInd) {
                if (get(currInd) == `val`) {
                    set(currInd, get(lastInd--))
                } else {
                    currInd++
                }
            }
        }
        return lastInd.inc()
    }
}

fun main() {
    Solution().removeElement(intArrayOf(3, 2, 2, 3), 3)
}