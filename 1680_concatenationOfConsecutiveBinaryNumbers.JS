/**
 * 思路：
 * 1.先判断此数需要几个二进制位
 * 2.将之前算出来的和左移刚刚算出来的二进制位
 * 3.加上此数
 * 
 * 问题：
 * 二进制位=Floor(log2(number))+1 而不是 Ceil(log2(number))
 * 10^9是1e9不是10e9
 * 
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function (n) {
    const MODULO_n = 1e9 + 7;
    let sum_n = 0;
    for (let currN_n = 1; currN_n <= n; ++currN_n) {
        let bits_n = 1 + Math.floor(Math.log2(currN_n));
        sum_n = (sum_n*Math.pow(2, bits_n) + currN_n)%MODULO_n;
    }
    return sum_n;
};

console.log(concatenatedBinary(12));