import kotlin.math.ceil
import kotlin.math.floor
import kotlin.math.round

class Solution {
    fun isPowerOfThree(n: Int): Boolean {
        val temp = kotlin.math.log(n.toDouble(), 3.0);
        return kotlin.math.abs(round(temp) - temp) < 10E-3;
    }
}

fun main() {
    val t = kotlin.math.log(19682.0, 3.0);
    print(t)
}