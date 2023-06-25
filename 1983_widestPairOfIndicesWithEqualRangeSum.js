/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var widestPairOfIndices = function (A1, A2) {
    for (let i = 0; i < A1.length; ++i)
        A1[i] = A1[i] - A2[i]
    let P = [A1[0]]
    let M = new Map()
    M.set(A1[0], 0)
    for (let i = 1; i < A1.length; ++i) {
        P[i] = P[i - 1] + A1[i]
        M.set(P[i], i)
    }

    let ans = 0
    if (M.has(0)) ans = M.get(0) + 1
    /**
     * P[j]-P[i] = 0
     * P[j]=P[i]
     */
    for (let i = 0; i < A1.length; ++i) {
        if (M.has(P[i])) ans = Math.max(ans, M.get(P[i]) - i)
    }
    return ans
    // let [P1, P2] = [[A1[0]], [A2[0]]]
    // let [M1, M2] = [new Map([P1[0], 0]), new Map([P2[0], 0])]
    // for (let i = 1; i < A1.length; ++i) {
    //     P1[i] = P1[i - 1] + A1[i]
    //     P2[i] = P2[i - 1] + A2[i]
    //     M1.set(P1[i], i)
    //     M2.set(P2[i], i)
    // }
};

console.log(widestPairOfIndices([0, 0, 0, 1], [1, 1, 1, 0]))