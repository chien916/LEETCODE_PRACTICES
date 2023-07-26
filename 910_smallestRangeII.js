/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeII = function (V_n, k) {
    V_n.sort((a, b) => a - b);
    let l_n = V_n.length;
    let a = V_n[l_n-1]-V_n[0];
    
    if (l_n === 1) return 0;
    for (let i = 1; i < l_n; ++i) {
        a = Math.min(a, Math.max(V_n[l_n - 1] - k, V_n[i - 1] + k) - Math.min(V_n[0] + k, V_n[i] - k));
    }
    return a;
};