/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function (V_1, V_2) {
    let V = [V_1, V_2];
    let l = V_1.length;
    for (let i = 0; i < V.length; ++i) {
        V[i] = V[i].map((v, i) => [v, i]);
        V[i].sort((A, B) => A[0] - B[0]);
    }
    let A = Array(l).fill(null);
    for (let I = [0, 0]; I[1] < l; ++I[1]) {
        /**
         * for every element in V_2, find a good V_1 that is slightly greater
         */
        while (I[0] < l && (V[0][I[0]] === null || V[0][I[0]][0] <= V[1][I[1]][0])) { ++I[0]; }
        if (I[0] < l) {
            A[V[1][I[1]][1]] = V[0][I[0]][0];
            V[0][I[0]] = null;
        }
    }
    for (let I = [0, 0]; I[1] < l; ++I[1]) {
        if (A[I[1]] !== null) continue;
        while (V[0][I[0]] === null) { ++I[0]; }
        A[I[1]] = V[0][I[0]][0];
        V[0][I[0]] = null;
    }
    return A;
};

console.log(advantageCount([2, 0, 4, 1, 2], [1, 3, 0, 0, 2]));