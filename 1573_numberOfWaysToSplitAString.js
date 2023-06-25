/**
 * @param {string} s
 * @return {number}
 */
var numWays = function (s) {
    let Inds = []
    for (let i = 0; i < s.length; ++i) {
        if (s.charAt(i) === '1') Inds.push(i)
    }
    //   C(n,2)
    // = n!/(r!*(n-r)!)
    // = n!/(2*(n-2)!)
    // = n*(n-1)/2
    let mod = 1e9 + 7
    if (Inds.length === 0) {
        let n = s.length - 1//number of spaces between character
        return ((n) * ((n - 1)) * 0.5) % mod
    }
    if (Inds.length % 3 > 0) return 0//boundary case -> cannot split 1s into 3 equal parts
    let ans = 0

    let k = Inds.length / 3//number of 1s in each substring
    let l = (k - 1)
    let l_ = l + 1
    let r_ = l_ + (k - 1)
    let r = r_ + 1
    let [L, R] = [[Inds[l], Inds[l_]], [Inds[r_], Inds[r]]]

    ans = (((L[1] - L[0]) % mod) * ((R[1] - R[0]) % mod)) % mod
    return ans
};

console.log(numWays("10101"))//