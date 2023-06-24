/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (n, d) {
    let neg = ((n < 0 && d >= 0) || (n >= 0 && d < 0));
    [n, d] = [Math.abs(n), Math.abs(d)]
    let ans = neg ? "-" : ""
    //handles value on the left of decimmal point
    ans += parseInt(Math.floor(n / d))
    n = (n % d) * 10
    if (n === 0) return ans//maybe there's no decimal point?
    //handles value on the right of decimal point
    ans += "."
    let M = new Map()
    while (n > 0 && ans.length < 1e4 + 1) {
        let _dig = parseInt(Math.floor(n / d))
        if (M.has(_dig)) {
            if(M.size === 1 &&M.has(0)) 
            ans = ans.slice(0, M.get(_dig)) + "(" + ans.slice(M.get(_dig)) + ")"
            return ans
        }
        M.set(_dig, ans.length)//handles 0
        ans += _dig
        n = (n % d) * 10
    }
    return ans
};

console.log(fractionToDecimal(1, 333))