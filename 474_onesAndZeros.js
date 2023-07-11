/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (S, m, n) {
    let len = S.length;
    S = S.map((s) => {
        s = [...s];
        let C = [0, 0];
        for (let c of s) {
            if (c === '0') ++C[0];
            else ++C[1];
        }
        return C;
    })
    /**
     * DP::KNAPSACK
     * Dp[i][m'][n'] 
     * -> Size of the largest subset of S[0:i] incls. with at most m' and n'
     * 
     */
    let Dp = Array(len + 1).fill().map(
        () => Array(m + 1).fill().map(
            () => Array(n + 1).fill(0)
        )
    );
    for (let i = 1; i <= len; ++i) {//only consider transferable states
        for (let _m = 0; _m <= m; ++_m) {//for knapsack -> constraint count from 1
            for (let _n = 0; _n <= n; ++_n) {//for knapsack -> constraint count from 1
                let D = [_m - S[i - 1][0], _n - S[i - 1][1]];
                let v = D[0] >= 0 && D[1] >= 0;
                Dp[i][_m][_n] = Math.max(Dp[i - 1][_m][_n], v ? (Dp[i - 1][D[0]][D[1]] + 1) : 0);
               // console.log(`Size of largest subset of strs[0:${i}] with at most ${_m} 0's and ${_n} 1's is ${Dp[i][_m][_n]}`);
            }
        }
    }
    return Dp[Dp.length - 1][Dp[0].length - 1][Dp[0][0].length - 1];
};
console.log(findMaxForm(["10","0001","111001","1","0"], 5, 3));
//console.log(findMaxForm(["10","0","1"], 1, 1));