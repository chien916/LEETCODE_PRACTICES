/**
Given an integer n, return true if it is a power of four. Otherwise, return false.
An integer n is a power of four, if there exists an integer x such that n == 4x.

 */
import kotlin.math.*
class Solution {
    fun isPowerOfFour(n: Int): Boolean {
        val temp = log(n.toDouble(),4.0)
        return abs(round(temp)-temp)<1E-15
    }
}