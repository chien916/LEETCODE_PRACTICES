/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function (V, k) {
    let V_s = [];
    let g_ge = (v) => {
        let [l, r] = [0, V_s.length - 1];
        while (l < r) {
            let m = l + ((r - l) >>> 1);
            if (V_s[m] >= v) r = m;
            else l = m + 1;
        }
        return l;
    }
    for (let i = 0; i < k; ++i) {
        if (V_s.length === 0 || V_s[V_s.length - 1] < V[i]) V_s.push(V[i]);
        else V_s.splice(g_ge(V[i]), 0, V[i]);
    }
    let A = [];
    for (let [l, r] = [0, k-1]; r < V.length;) {
        A.push((V_s[(V_s.length - 1) >>> 1] + V_s[(V_s.length) >>> 1]) / 2);
        V_s.splice(g_ge(V[l++]), 1);
        ++r;
        if (r < V.length) {
            if (V_s.length === 0 || V_s[V_s.length - 1] < V[r]) V_s.push(V[r]);
            else V_s.splice(g_ge(V[r]), 0, V[r]);
        }
    }
    return A;
};
console.log(medianSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))