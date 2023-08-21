/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {

    let Dp_fac = [0, 1];
    for (let i = 2; i <= n; ++i) {
        Dp_fac[i] = Dp_fac[i - 1] * i;
    }

    let a = 0;
    let C = Array(n).fill().map((_, i) => i + 1);//candidates
    for (let i = n; i > 0; --i) {
        let o = Dp_fac[i];//how many combinations totally are there
        let g = o / C.length;//how many combinations are in a group
        let j = Math.floor(((k - 1) % o) / g);//index of the current digit
        a = (a * 10) + C[j];
        C.splice(j, 1);//delete that digit since it cannot be reused
    }
    return a.toString();


};

console.log(getPermutation(4, 9))