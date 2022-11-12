/**
Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

知识点1：一个数的奇偶性可以用二进制的最右面一位来判断
-如果这个数是正数 那么最右位是1则为奇数 0则为偶数
-如果这个数是负数 那么最右位是0则为奇数 1则为偶数

知识点2：一个数的平方可以利用a^(m*n)=a^m^n来分解
-如果一个数是偶数 那么a^m = a^(floor(m/2))^2 =
-如果一个数是奇数正数 那么a^m = a^(floor(m/2))^2 * a
-如果一个数是奇数负数 那么a^m = a^(floor(m/2))^2 / a

知识点3：递归中如果有用到相同参数值的函数被调用多次，那么可以将此函数调用一次存到临时变量中
 */

class Solution {
    fun myPow(x: Double, n: Int): Double {
        return if (n == 0)
            1.0;
        else if (n == 1)
            x;
        else if (n % 2 == 0) //even
            myPow(myPow(x, n / 2), 2);
        else if (n < 0)
            myPow(myPow(x, n / 2), 2) * x;
        else
            myPow(myPow(x, n / 2), 2) / x;
    }
}

fun main() {
    print("test");
}
