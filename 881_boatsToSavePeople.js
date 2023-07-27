/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (V_p, m) {
    let a = 0;
    let l_p = V_p.length;
    V_p.sort((a, b) => a - b);
    for (let [l, r] = [0, l_p - 1]; l <= r; a++) {
        if (V_p[l] + V_p[r] <= m) { ++l; }
        --r;
    }
    return a;
};