/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function (V_n, n) {
    //calculate the upper bound to form n
    let u = 0;//upper bound inclusive
    let s = 0;//sum reachable
    while (s < n) {
        s += ++u;
    }
    let a = 0;//minimum number of patch required

    let S = new Set(V_n);
    for (let i = 1; i <= u; ++i) {
        if (!S.has(i)) ++a;
    }
    return a;
};

console.log(minPatches([1,5,10],20))