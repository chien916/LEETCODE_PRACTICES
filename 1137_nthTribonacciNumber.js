/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    let mem_nA = [0,1,1];
    if(n<3) return mem_nA[n];
    for (let i_n = 3; i_n <= n; ++i_n) {
        [mem_nA[0],mem_nA[1],mem_nA[2]]
         = [mem_nA[1],mem_nA[2],mem_nA[0]+mem_nA[1]+mem_nA[2]];
    }
    return mem_nA[2];
};