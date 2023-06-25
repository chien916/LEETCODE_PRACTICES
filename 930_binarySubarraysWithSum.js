/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (A, g) {
    //PREFIX SUM & HASH MAP
    let P = [A[0]]
    let M = new Map()
    M.set(P[0], [0])//Dont' forget this
    for (let i = 1; i < A.length; ++i) {
        P[i] = P[i - 1] + A[i]
        if (!M.has(P[i])) M.set(P[i], [])
        M.get(P[i]).push(i)
    }
    //TWO POINTERS
    /**
     * P[j] - P[i] = g
     * P[j] = g + P[i]
     * 
     * trivial case:
     * P[i] = g
     */
    let ans = 0
    if (M.has(g)) ans += M.get(g).length
    //console.log(ans)
    for (let i = 0; i < A.length; ++i) {
        if (!M.has(g + P[i])) continue
        let C = M.get(g + P[i])//candidates of index
        //prereq: j > i -> antireq: C[-1] > i
        if (C[C.length - 1] <= i) continue
        //BINARY SEARCH
        let [j_lo, j_hi] = [0, C.length - 1]
        while (j_lo < j_hi) {
            let j_mid = j_lo + ((j_hi - j_lo) >>> 1)
            if (C[j_mid] <= i) j_lo = j_mid + 1
            else j_hi = j_mid
        }
        //console.log(C.length - j_lo)
        ans += (C.length - j_lo)
    }
    return ans
};

console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0))