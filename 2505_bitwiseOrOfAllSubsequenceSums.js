/**
 * @param {number[]} nums
 * @return {number}
 */
var subsequenceSumOr = function (V_n) {
    /**
     * Theorm:
     * 
     */
    let s = 0n;
    let a = 0n;
    for (let n of V_n) {
        n = BigInt(n);
        a |= (s | (s += n) | n);
    }
    return Number(a);
};