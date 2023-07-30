/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (V_n) {
    V_n.sort((a, b) => a - b);
    let A = [];
    let l_n = V_n.length;
    for (let [l, r] = [(l_n - 1) >>> 1, l_n - 1]; r > ((l_n - 1) >>> 1);) {
        A.push(V_n[l]);
        A.push(V_n[r]);
        --l;
        --r;
    }
    if (l_n % 2) {
        A.push(V_n[0]);
    }
    for (let i = 0; i < l_n; ++i) {
        V_n[i] = A[i];
    }
};

wiggleSort([3, 5, 2, 1, 6, 4])