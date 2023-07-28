/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function (V_t, p) {
    let s = 0;
    let l_t = V_t.length;
    V_t.sort((a, b) => a - b);
    /**
     * Left: small power | Right: big power 
     * Gain score from left, Gain power from right
     * Lose a score on the right can be gained back on the left
     */
    for (let [l, r] = [0, l_t - 1]; l <= r;) {
        if (p >= V_t[l]) {
            p -= V_t[l];
            ++s;
            ++l;
            //      console.log(`left opr p ${p} s ${s} `)
        } else if (s > 0 && l < r) {
            p += V_t[r];
            --s;
            --r;
            //  console.log(`right opr p ${p} s ${s} `)
        } else break;
    }
    return s;
};