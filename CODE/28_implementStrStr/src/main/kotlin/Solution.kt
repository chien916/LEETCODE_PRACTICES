class Solution {
    fun strStr(haystack: String, needle: String): Int {
        l@ for (i in haystack.indices) {
            return try{
                for (j in needle.indices) {
                    if(haystack[i+j]!=needle[j]){
                        continue@l
                    }
                }
                i
            }catch (_:Exception){
                -1
            }
        }
        return -1
    }
}