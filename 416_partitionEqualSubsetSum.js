/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (N) {
    /**
     * Dp[j] = is it possible to form sum to j
     */

    let s = N.reduce((p, v) => p + v, 0);
    if (s % 2) return false;
    let h = s >>> 1;
    let Dp = Array(h + 1).fill(false);
    Dp[0] = true;//
    for (let i = 0; i < N.length; ++i) {//element
        let S = new Set();
        let _n = N[i];
        for (let j = 0; j <= h; ++j) {//sum
            if (!Dp[j] && (j - _n >= 0) && !S.has(j - _n) && Dp[j - _n]) {
                Dp[j] = true;
                S.add(j);
            }
            // if (((j - _n >= 0) && Dp[j - _n]))
            //     console.log(`summable to ${j} because at ${_n} ${j - _n} is true`)
        }
    }
    // console.log(Dp)
    return Dp[h];
};

console.log(canPartition([1, 2, 5]))