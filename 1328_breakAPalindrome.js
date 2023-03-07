/**
 * 思路：
 * 1.既然是回文，那么就找到第一个不是a的把他换成a
 * 
 * 边界情况：
 * 只有一个值，无论如何都是回文 -> 无解
 * 直到较小中索引仍然全部是a -> 把最后一个改成b
 * @param {string} palindrome
 * @return {string} 
 */
var breakPalindrome = function (palindrome) {
    if (palindrome.length === 1) return "";
    const A_CAHRCODE_n = "a".charCodeAt(0);
    for (let i_n = 0; i_n < Math.floor(palindrome.length / 2); ++i_n) {
        if (palindrome.charCodeAt(i_n) !== A_CAHRCODE_n) {
            return palindrome.slice(0, i_n) + "a" + palindrome.slice(i_n + 1);
        }
    }
    return palindrome.slice(0,palindrome.length-1) + "b";
};