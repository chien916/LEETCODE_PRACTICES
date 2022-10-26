/**
Given an integer n, return true if it is a power of two. Otherwise, return false.
An integer n is a power of two, if there exists an integer x such that n == 2x.

知识点1：一个数字如果是2的平方，那么他的二进制除了最高有效位之外全部都是0

知识点2: 计算机算法中指数运算的结果可能不是一个整数值
-判断一个log结果是不是整数可以利用 n*10%10 < A_SMALL_NUMBER 来进行判断
 */

class Solution {
    fun isPowerOfTwo(n: Int): Boolean {
        return kotlin.math.log2(n.toDouble()) * 10.0 % 10 < 1E-10;
    }
}
