/**
 * @param {number[]} cells
 * @param {number} n
 * @return {number[]}
 */
var prisonAfterNDays = function (V, d) {
    let v = 0;
    for (let i = 0; i < 8; ++i) {
        if (V[7 - i]) v |= (1 << i);
    }

    let b = Number.parseInt("01111110", 2);
    let M = new Array(257).fill(null);
    let M_ = [];
    // let i = 0
    while (M[v] === null) {
        let v_ = (~((v << 1) ^ (v >>> 1))) & b;
        M[v] = v_;
        M_.push(v_);
        v = v_;
    }
    let s;
    let l_m_ = M_.length;
    for (let i = 0; i < l_m_; ++i) {
        if (M_[i] === M_[l_m_ - 1]) {
            s = i;
            break;
        }
    }
    console.log(M_.map((it) => it.toString(2).padStart(8, '0')))
    let r = l_m_ - s - 1;
    let i_ = (d - 1 - (r === 0 ? 0 : s)) % (r === 0 ? l_m_ : r) + (r === 0 ? 0 : s);

    return M_[i_].toString(2).padStart(8, '0').split("");
};

console.log(prisonAfterNDays([0,1,1,0,1,0,1,0], 8).toString(2))