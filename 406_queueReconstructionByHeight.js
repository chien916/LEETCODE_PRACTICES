/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (V_p) {
    V_p.sort((P_a, P_b) => {
        if (P_a[0] === P_b[0]) return P_a[1] - P_b[1];
        else return -P_a[0] + P_b[0];
    });
    let A = [];
    for (let P of V_p) {
        A.splice(P[1], 0, P);
    }
    return A;
};