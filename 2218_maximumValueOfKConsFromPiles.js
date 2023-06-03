/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function (piles, k) {
    /**
     * dp[i][c] -> max coin values until i-th(0-based) pile if c coins are allowed
     * note that dp[i][c] does NOT denotes the coins will be taken from i-th pile!
     */
    let dp_A = Array(piles.length).fill().map(() => Array(k + 1).fill(0));
    for (let i_n = 0; i_n < piles.length; ++i_n) {//up until ith pile
        for (let c_n = 1; c_n <= k; ++c_n) {//if we are allowed to take c coins
            let currCoinsSum = 0;
            for (let j_n = 0; j_n < Math.min(
                c_n + 1,//if there's more coins in thie pile than we are allowed to
                i_n === piles.length - 1
                    ? Number.MAX_SAFE_INTEGER
                    : piles[i_n].length + 1//if we need more coins than coins in current pile
            ); ++j_n) {//yet we try to take j coins from i-th pile
                dp_A[i_n][c_n]
                    = Math.max(dp_A[i_n][c_n], (
                        i_n === 0//when theres no previous pile
                            ? 0
                            : dp_A[i_n - 1][
                                c_n - j_n
                              ]
                    )
                        + (currCoinsSum += (
                            (j_n === 0 || j_n - 1 > piles[i_n].length - 1)//handles piles boundary case
                                ? 0//takes no coin from current pile
                                : (piles[i_n][j_n - 1])//takes a coin 
                        ))
                    );
            }
        }
    }
    return dp_A[piles.length - 1][k];
};

console.log(maxValueOfCoins([[37, 88], [51, 64, 65, 20, 95, 30, 26], [9, 62, 20], [44]], 9))