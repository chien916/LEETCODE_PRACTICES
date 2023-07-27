/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (V_n) {
    if (V_n.length === 1) return 0;//boundary
    let R = [0, 0];
    let s = 1;
    while (R[0] <= R[1]) {
        let R_ = [R[1] + 1, 0];
        for (let i = R[0]; i <= R[1]; ++i) {
            R_[1] = Math.max(R_[1], i + V_n[i]);
            if (R_[1] >= V_n.length - 1) return s;
        }
        ++s;
        R = R_;
    }
};

console.log(jump([2, 3, 1, 1, 4]))