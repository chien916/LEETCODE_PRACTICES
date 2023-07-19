/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (V, V_q) {
    let P = [V[0]];
    let l_v = V.length;
    for (let i = 1; i < l_v; ++i) {
        P[i] = (P[i - 1] ^ V[i]);
    }
    let A = [];
    for (let Q of V_q) {
        A.push(P[Q[1]] ^ ((Q[0] - 1 > -1) ? P[Q[0] - 1] : 0));
    }
    return A;
};

//console.log(xorQueries([1, 3, 4, 8], [[0, 1], [1, 2], [0, 3], [3, 3]]))