/**
 * @param {number[]} bulbs
 * @param {number} k
 * @return {number}
 */
var kEmptySlots = function (V_b, k) {
    let l_v = V_b.length;
    if (l_v < k + 2) return -1;//boundary
    //index-val reversion:
    /**
     * V_r index:bulb position val:day number
     * V_b index:day number val:bulb position
     */
    let V_r = Array(l_v).fill();
    for (let i = 0; i < l_v; ++i) {
        V_r[V_b[i] - 1] = i;
    }
    //SLIDING WINDOW
    let ans = Infinity;
    for (let [l, r] = [0, k + 1]; r < l_v;) {
        let b = true;
        for (let i = l + 1; b && i < r; ++i) {
            if (V_r[i] < V_r[l] || V_r[i] < V_r[r]) b = false;
        }
        if (b) {
            ans = Math.min(ans, Math.max(V_r[l], V_r[r]));
        }
        ++l;
        ++r;
    }
    if (ans === Infinity) return -1;
    return ans + 1;
};
console.log(kEmptySlots([1,2,3], 1))