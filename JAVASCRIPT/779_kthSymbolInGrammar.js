var kthGrammerCorrected = function (n, k) {
    if (n === 0 && k === 0) return 0;
    else {
        let receivedNumber = kthGrammerCorrected(n - 1, Math.floor(k / 2));
        let requestedIndex = k % 2;
        if (receivedNumber && !requestedIndex || !receivedNumber && requestedIndex)
            return 1;
        else
            return 0;
    }
}

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
    return kthGrammerCorrected(n-1,k-1);

    /**
     * 0
     * 01
     * 0110
     * 01101001
     */

    /**
     * i,r
     * 0,0 0
     * 0,1 1
     * 1,0 1
     * 1,1 0
     */
};

kthGrammar(1,1);