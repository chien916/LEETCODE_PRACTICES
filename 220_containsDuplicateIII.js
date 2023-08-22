/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (V_n, d_i, d_v) {
    let l_n = V_n.length;
    let V_v = [];
    let indexOf_ = (V, v, g = true) => {//search value and return index greater than or 
        let [l, r] = [0, V.length - 1];
        while (l < r) {
            if (g) {
                let m = l + ((r - l) >>> 1);
                if (V[m] < v) l = m + 1;
                else r = m;
            } else {
                let m = r - ((r - l) >>> 1);
                if (V[m] <= v) l = m;
                else r = m - 1;
            }
        }
        return l;
    }
    let add_ = (v) => {
        if (V_v.length === 0 || V_v[V_v.length - 1] < v) V_v.push(v);
        else V_v.splice(indexOf_(V_v, v), 0, v);
    }
    let del_ = (v) => {
        V_v.splice(indexOf_(V_v, v), 1);
    }
    for (let i = 1; i <= Math.min(l_n - 1, d_i); ++i) {
        add_(V_n[i]);
    }
    for (let [l, r] = [1, Math.min(l_n - 1, d_i)]; l < l_n;) {
        let [v_max, v_min] = [V_n[l - 1] + d_v, V_n[l - 1] - d_v];
        //index of first element greater or equal to minimum value acceptable
        if (V_v[V_v.length - 1] >= v_min && V_v[0] <= v_max) {
            let i_l = indexOf_(V_v, v_min);
            //index of last element less or equal to maximum value acceptable
            let i_r = indexOf_(V_v, v_max, false);
            if (i_l <= i_r) {
                return true;
            }
        }
        del_(V_n[l]);
        ++l;
        if (r + 1 < l_n) {
            ++r;
            if (r < l_n) add_(V_n[r]);//add to sliding window
        }
    }
    return false;
};

// let p = [7, 1, 3];
// console.log(containsNearbyAlmostDuplicate(p, 2, 3));