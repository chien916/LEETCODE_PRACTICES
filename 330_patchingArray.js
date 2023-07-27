/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function (V_n, n) {
    let i = 0;
    let m = 1;
    let p = 0;
    while (m <= n) {//error 1 : becuase m is not included (open interval)
        if (i < V_n.length && V_n[i] <= m) {
            m += V_n[i++];
        } else {
            ++p;
            m += m;
        }
    }
    return p;
};

console.log(minPatches([1,2,2], 5));