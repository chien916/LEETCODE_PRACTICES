/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (V, k) {
    let M = new Map();
    for (let i = 0; i < V.length; ++i) {
        if (!M.has(V[i])) M.set(V[i], 0);
        M.set(V[i], M.get(V[i]) + 1);
    }
    M = [...M].sort((A, B) => -(A[1] - B[1]));
    while (M.length > 0 && k >= M[M.length - 1][1]) {
        k -= M.pop()[1];
    }
    return M.length;
};
