/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function (V_a) {
    let [n_min, n_max] = [Infinity, -Infinity];
    let a = -Infinity;
    for (let V_n of V_a) {
        let d_1 = Math.abs(V_n[V_n.length - 1] - n_min);
        let d_2 = Math.abs(n_max - V_n[0]);
        if (isFinite(d_1) && isFinite(d_2))
            a = Math.max(a, d_1, d_2);

        if (V_n[0] < n_min) n_min = V_n[0];
        if (V_n[V_n.length - 1] > n_max) n_max = V_n[V_n.length - 1];
    }
    return a;
};