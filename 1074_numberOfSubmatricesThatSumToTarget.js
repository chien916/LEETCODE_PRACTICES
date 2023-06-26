/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function (Mat, t) {
    let [h, w] = [Mat.length, Mat[0].length]
    let ans = 0
    for (let i = 0; i < h; ++i) {
        let S = Array(w).fill(0)
        for (let i_ = i; i_ < h; ++i_) {
            let M = new Map([[0, [-1]]])
            let P = []
            for (let j_ = 0; j_ < w; ++j_) {
                P[j_] = (j_ > 0 ? P[j_ - 1] : 0) + (S[j_] += Mat[i_][j_])
                /**
                 * P[j_] - P[i] = t
                 * P[i] = P[j_] - t
                 */
                if (M.has(P[j_] - t)) {
                    // for (let j of M.get(P[j_] - t))
                    //     console.log(`i[${i},${i_}] j[${j+1},${j_}]`)
                    ans += M.get(P[j_] - t).length
                }

                if (!M.has(P[j_]))
                    M.set(P[j_], [])
                M.get(P[j_]).push(j_)
            }
        }
    }
    return ans
};

console.log(numSubmatrixSumTarget([[0, 1, 0], [1, 1, 1], [0, 1, 0]], 0))