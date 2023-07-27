/**
 * @param {number[]} machines
 * @return {number}
 */
var findMinMoves = function (V_m) {
    let l_m = V_m.length;
    let k = V_m.reduce((p, v) => p + v, 0) / l_m;
    if (k - Math.floor(k) > 0) return -1;
    // V_m[i] - k = left[i]+right[i]
    //START FROM BOUNDARY LEFT TO CONSTRAIN
    let [m_l, m_r] = [0, V_m[0] - k];
    let a = m_r;//initial from i = 0
    for (let i = 1; i < l_m; ++i) {
        m_l = -m_r;
        m_r = V_m[i] - k - m_l;
        a = Math.max(a, Math.max(0, m_l) + Math.max(0, m_r));
    }
    return a;
};