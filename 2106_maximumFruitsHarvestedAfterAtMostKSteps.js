/**
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */
var maxTotalFruits = function (fruits, startPos, k) {
    //centered around startPos, expand k units both on the right and left
    let fruA = Array(2 * k + 1).fill(0);

    for (let [indN, valN] of fruits) {
        /**
         * orig     [0 1 2 3 4 5 6 7]
         *               l   b   r    k = 2 startPos = 4
         * shift        [2 3 4 5 6]
         * index        [0 1 2 3 4]  index' = index - (startPos - k)
         * valid range -> [startPos-k,startPos+k]
         */
        let indN_ = indN - (startPos - k)//not sure
        //I only care about fruits within range [startPos-k,startPos+k]
        if (indN_ >= 0 && indN_ <= fruA.length - 1) fruA[indN_] = valN
    }

    //prefix sum
    const lenN = fruA.length
    let pSumA = [fruA[0]]
    for (let iN = 1; iN < lenN; ++iN) pSumA[iN] = pSumA[iN - 1] + fruA[iN]
    //sliding window
    let retN = 0
    /**
     * start -> (left -> start) -> right when left>right
     * start -> (right -> start) -> left when left<=right
     */
    const midN = lenN >> 1;

    for (let sWA = [0, midN]; sWA[0] <= midN;) {
        retN = Math.max(retN, pSumA[sWA[1]] - (sWA[0] ? pSumA[sWA[0] - 1] : 0))
        sWA[0] += 2
        sWA[1] += 1

    }
    for (let sWA = [midN, lenN - 1]; sWA[1] >= midN;) {
        retN = Math.max(retN, pSumA[sWA[1]] - (sWA[0] ? pSumA[sWA[0] - 1] : 0))
        sWA[1] -= 2
        sWA[0] -= 1
    }


    return retN
};

//test
console.log(maxTotalFruits([[2, 8], [6, 3], [8, 6]], 5, 4));