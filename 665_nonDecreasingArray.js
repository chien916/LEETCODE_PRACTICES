/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (V_n) {
    for (let [i, s] = [1, 0]; i < V_n.length; ++i) {
        let n_l = i === 1 ? -Infinity : V_n[i - 2];
        let n_m = V_n[i - 1];
        let n_r = V_n[i];
        if (n_r < n_m) {
            if (s === 1) return false;
            s = 1;
            if (n_l <= n_r) {//1 3 2 4
                V_n[i - 1] = V_n[i];
            } else {//2 3 1 4
                V_n[i] = V_n[i - 1];
            }
        }
    }
    return true;
};

checkPossibility([-1, 4, 2, 3])