/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function (V_1, V_2) {
    let l_i = V_1.length;
    let l_j = V_1[0].length;
    let [V_1_, V_2_] = [Array(l_i).fill(0), Array(l_i).fill(0)];
    for (let [V_o, V_t] of [[V_1, V_1_], [V_2, V_2_]]) {
        for (let i = 0; i < l_i; ++i) {
            for (let j = 0; j < l_j; ++j) {
                if (V_o[i][j]) { V_t[i] |= (1 << j); }
            }
        }
    }
    let g_pc = (n, a = 0) => {
        while (n) {
            ++a;
            n &= (n - 1);
        }
        return a;
    }
    let g_s = (N) => {
        let s = "";
        for (let i = 0; i < l_j; ++i) {
            s += N[i].toString(2).padStart(l_j, "0").split("").reverse().join("");
            s += "\n";
        }
        return s;
    }
    let a = 0;
    for (let i = -l_i; i <= l_i; ++i) {//x
        for (let j = -l_j; j <= l_j; ++j) {//y
            for (let [V_1, V_2] of [[V_1_, V_2_], [V_2_, V_1_]]) {
                let _V_1 = [...V_1];
                let _V_2 = [...V_2];
                for (let k = 0; k < l_j; ++k) {
                    // if (i == 0 && j === -1) {
                    //     let _ = 1;
                    // }
                    let k_ = k + j;
                    if (i <= 0) _V_1[k] = (k_ > -1 && k_ < l_i) ? ((V_1[k_] << (-i)) & ((1 << l_j) - 1)) : 0;
                    else _V_1[k] = (k_ > -1 && k_ < l_i) ? (V_1[k_] >>> i) : 0;
                }
                let _a = 0;

                for (let k = 0; k < l_i; ++k) {
                    _V_2[k] &= _V_1[k];
                    _a += g_pc(_V_2[k]);
                }
               // if (i == 0 && j === -1)
                   // console.log(`\n+++++ i ${i} | j ${j} \nshifting\n${g_s(V_1)}\nto\n${g_s(_V_1)}\nanding\n${g_s(V_2)}\nyielding\n${g_s(_V_2)}\n--->${_a}`)
                if (_a > a) a = _a;
            }
        }
    }
    return a;
};

console.log(largestOverlap([[0, 0, 0, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 1, 0], [0, 1, 1, 0, 0], [0, 0, 0, 1, 0]], [[0, 0, 0, 1, 0], [0, 0, 0, 0, 0], [1, 1, 1, 0, 1], [0, 0, 1, 1, 1], [0, 1, 0, 0, 0]]))
