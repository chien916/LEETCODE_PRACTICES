/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    /**
     * dp define:
     * dp[n] -> number of perfect squares needed to sum up to "n"
     * 
     * dp base state:
     * dp[n] = n for every n -> since we can always take n 1s to sum up to n
     * dp[0] = 0 -> we dont need any number to sum up to 0
     * 
     * state transfer: indeterminate
     * state transfer helper:
     * enumerate all perfect squares (say m) from 1 to an upper limit
     * -> #PSs To Reach n = #PSs to reach n-m + 1
     * -> 1 refers to the perfect square of sqrt(m)
     */
    let dp_A = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);//SC+=O(n)
    dp_A[0] = 0;
    for (let i_n = 1; i_n < dp_A.length; ++i_n) {//TC+=O(n)
        for (let j_n = 1; ; ++j_n) {//TC+=O(sqrt(n))
            let currSqr_n = Math.pow(j_n, 2);
            if (currSqr_n > i_n) break;
            dp_A[i_n] = Math.min(dp_A[i_n], 1 + dp_A[i_n - currSqr_n]);
        }
    }
    return dp_A[n];
};

console.log(numSquares(12));