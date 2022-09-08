/**
 * Linear repetitions can be replaced with Exponential repetitions
 *
 * In java, abs(MIN_VALUE) can retain its negativity because of compiling conventions
 *
 */
class Solution {
    fun divide(dividend: Int, divisor: Int): Int {
        //edge
        if (dividend == Int.MIN_VALUE && divisor == -1) return Int.MAX_VALUE;
        if (dividend == Int.MIN_VALUE && divisor == 1) return Int.MIN_VALUE;
        //
        val finalNegativity = (dividend < 0).xor(divisor < 0);
        var currentDividend:Long = kotlin.math.abs(dividend.toLong());
        var currentDivisor:Long = kotlin.math.abs(divisor.toLong());
        var currentMultiplesOfDivisor = 1;
        var cumulativeMultiplesOfDivisor = 0;
        while (currentDividend >= kotlin.math.abs(divisor.toLong())) {
            if (currentDividend >= currentDivisor) {
                currentDividend -= currentDivisor;
                cumulativeMultiplesOfDivisor += currentMultiplesOfDivisor;
                currentMultiplesOfDivisor = currentMultiplesOfDivisor.shl(1);
                currentDivisor = currentDivisor.shl(1);
            } else {
                currentDivisor = kotlin.math.abs(divisor.toLong());
                currentMultiplesOfDivisor = 1;
            }
        }
        return if (finalNegativity) {
            -cumulativeMultiplesOfDivisor;
        } else {
            cumulativeMultiplesOfDivisor;
        }
    }
}

fun main(): Unit {
    print(Solution().divide(-1010369383,-2147483648));
}