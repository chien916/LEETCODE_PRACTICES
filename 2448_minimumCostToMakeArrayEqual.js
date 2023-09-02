/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function (V, C) {
    let VC = [];
    let l_vc = V.length;
    for (let i = 0; i < l_vc; ++i) {
        VC[i] = [BigInt(V[i]), BigInt(C[i])];
    }
    VC.sort(([Va, Ca], [Vb, Cb]) => {
        if (Va !== Vb) return Number(Va - Vb);
        else return Number(Ca - Cb);
    });
    let [c_l, c_r] = [0n, 0n];
    for (let i = 1; i < l_vc; ++i) {
        c_r += (VC[i][0] - VC[0][0]) * (VC[i][1]);
    }
    //prefix sum of cost (forward)
    let PS_c_l = Array(l_vc).fill();
    PS_c_l[0] = VC[0][1];
    for (let i = 1; i < l_vc; ++i) {
        PS_c_l[i] = PS_c_l[i - 1] + VC[i][1];
    }
    //prefix sum of cost (reversed)
    let PS_c_r = Array(l_vc).fill();
    PS_c_r[l_vc - 1] = VC[l_vc - 1][1];
    for (let i = l_vc - 2; i > -1; --i) {
        PS_c_r[i] = PS_c_r[i + 1] + VC[i][1];
    }
    let c_min = c_l + c_r;
    //conclusion transfer
    for (let i = 1; i < l_vc; ++i) {
        /**
         * 1 3 5 2
         * 2 3 1 14
         * ->|
         */
        let d = VC[i][0] - VC[i - 1][0];
        c_l += d * PS_c_l[i - 1];
        c_r -= d * PS_c_r[i];
        if (c_l + c_r < c_min) c_min = c_l + c_r;
    }
    return Number(c_min);
};

//console.log(minCost([1,3,5,2],[2,3,1,14]))