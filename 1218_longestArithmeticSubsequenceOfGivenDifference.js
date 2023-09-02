/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function (A, d_req) {
    let l_a = A.length;
    let V = new Map();//visited number , length
    let a = 1;
    for (let n of A) {
        if (!V.has(n - d_req)) V.set(n, 1);
        else V.set(n, V.get(n - d_req) + 1);
        if (V.get(n) > a) a = V.get(n);
    }
    return a;


    // let l_a = A.length;
    // let DP = Array(l_a).fill(1);
    // let a = 0;
    // for (let i = 0; i < l_a; ++i) {
    //     for (let j = 0; j < i; ++j) {
    //         if (A[i] - A[j] == d_req) { DP[i] = DP[j] + 1; }
    //         if (DP[i] > a) a = DP[i];
    //     }
    // }
    // return a;
};