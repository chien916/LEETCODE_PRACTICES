class Solution {
    enum class Status {
        none, singleton, duplicate
    }

    fun findSubstring(s: String, words: Array<String>): List<Int> {
        //双指针:
        //滑动窗口
        //哈希表
        val dict = hashMapOf<String, Status>()
        val numberOfCharInWord = words[0].length
        var pointerFront = 0
        var pointerBack = 0
        var numberOfRecognizedWord = 0
        val checkIfRecognizedWordIsEnough: () -> Boolean = { numberOfRecognizedWord == words.size }
        words.forEach { dict[it] = Status.none }//initialize hashmap
        
    }
}