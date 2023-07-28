/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (V_n) {
    let Q = [];
    for (let n of V_n) {
        if (Q.length === 0 || n > Q[Q.length - 1]) {
            Q.push(n);
        } else {
            let [i_l, i_r] = [0, Q.length - 1];
            while (i_l < i_r) {
                let i_m = i_l + ((i_r - i_l) >>> 1);
                if (Q[i_m] < n) i_l = i_m + 1;
                else i_r = i_m;
            }
            Q[i_l] = n;
        }
    }
    return Q.length >= 3;
};