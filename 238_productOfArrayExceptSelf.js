/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (V_n) {
    let P = Array(V_n.length).fill();
    P[0] = BigInt(V_n[0]);
    let P_r = Array(V_n.length).fill();
    P_r[V_n.length - 1] = BigInt(V_n[V_n.length - 1]);

    for (let i = 1; i < V_n.length; ++i) {
        P[i] = BigInt(V_n[i]) * P[i - 1];
    }
    for (let i = V_n.length - 2; i > -1; --i) {
        P_r[i] = BigInt(V_n[i]) * P_r[i + 1];
    }
    let A = [];
    for (let i = 0; i < V_n.length; ++i) {
        let _a = 1n;
        if (i - 1 > -1) _a *= P[i - 1];
        if (i + 1 < V_n.length) _a *= P_r[i + 1];
        A.push(Number(_a));
    }
    return A;
};
