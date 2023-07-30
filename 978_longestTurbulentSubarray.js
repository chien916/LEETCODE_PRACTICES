/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function (V_a) {
    let l_a = V_a.length;
    if (l_a === 1) return 1;
    let V_h = [];
    for (let i = 0; i < l_a - 1; ++i) {
        if (V_a[i + 1] > V_a[i]) V_h[i] = 1;
        else if (V_a[i + 1] < V_a[i]) V_h[i] = -1;
        else V_h[i] = 0;
    }
    let a = 0;
    let dp = a = (V_h[0] === 0) ? 0 : 1;
    for (let i = 1; i < l_a - 1; ++i) {
        if (V_h[i] === 0) dp = 0;
        else if (V_h[i] === V_h[i - 1]) dp = 1;
        else dp += 1;
        if (dp > a) a = dp;
    }
    return a + 1;
};

console.log(maxTurbulenceSize([4, 5]))