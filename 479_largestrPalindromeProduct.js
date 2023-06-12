/**
 * @param {number} n
 * @return {number}
 */
var largestPalindrome = function (n) {
    if (n === 1) return 9;//boundary case
    /**
     * if multipliers has n digits, product will have either 2n-1 or 2n digits
     * 
     * enumerate only HALF palindrome, and determine if the enumerated result 
     * has 2 multipliers of n digits
     */
    const _MAX_N_DIGITS_N = BigInt(Array(n).fill("9").join(""));//guaranteed t be at least 99
    const _MIN_N_DIGITS_N = BigInt("1".concat(Array(n - 1).fill("0").join("")));//guaranteed to be at least 10
    const _MIN_NM1_DIGITS_N = _MIN_N_DIGITS_N / 10n;//guaranteed to be at least 1 and whole
    for (let cHalfPalindrom_n = _MAX_N_DIGITS_N; cHalfPalindrom_n >= _MIN_NM1_DIGITS_N; --cHalfPalindrom_n) {
        let cFullPalindrom_n
            = BigInt(cHalfPalindrom_n.toString() + [...cHalfPalindrom_n.toString()].reverse().join(""));
        for (let cMultipler_n = _MAX_N_DIGITS_N
            ; cMultipler_n ** 2n >= cFullPalindrom_n//error 1 -> _MIN_N_DIGITS_N
            ; --cMultipler_n) {
            //for (let cFullPalindrom_n of cFullPalindrom_a)
            if (cFullPalindrom_n % cMultipler_n === 0n && Math.floor(Math.log10(Number(cFullPalindrom_n / cMultipler_n), 10)) + 1 <= n)
                return Number(cFullPalindrom_n % 1337n);
        }
    }
    return -1;
};

console.log(largestPalindrome(7));