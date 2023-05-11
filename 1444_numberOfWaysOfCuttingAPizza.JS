/**
 * @param {string[]} pizza
 * @param {number} k
 * @return {number}
 */
var ways = function (pizza_sA, k_n) {
    /**
     * 思路：
     * 记忆法-自上而下动态规划
     * 状态定义：
     * dp[r][c][k] -> 从r行到最后一行，从c列到最后一列，切k刀，几种方法
     * 
     * 状态转移：
     * dp[r][c][k] =
     * = Σ dp[r+i][c][k-1] for all i within bounds where i>=1 -> 把上面i行切走（前提是上面i行是有pizza的）
     * + Σ dp[r][c+j][k-1] for all j within bounds where j>=1 -> 把左面j列切走（前提是左边j行是有pizza的）
     * 
     * 取模知识点：
     * 取模时要对最终的结果取模，而不是对中间结果取模
     * a = a + (b mod n) 是不对的，应该为 a = (a + b) mod n
     * 
     * 利用lc304题Range Sum思想判断某个二维区间有没有pizza
     */
    let hasPizzaAt_fb = (r_n, c_n) => pizza_sA[r_n].charCodeAt(c_n) === "A".charCodeAt(0);
    let rangeSumTabu_nAA = Array(pizza_sA.length).fill().map(x
        () => Array(pizza_sA[0].length).fill().map(() => NaN)
    );

    for (let i_n = 0; i_n < pizza_sA.length; ++i_n) {
        for (let j_n = 0; j_n < pizza_sA[0].length; ++j_n) {
            rangeSumTabu_nAA[i_n][j_n]
                = (hasPizzaAt_fb(i_n, j_n) ? 1 : 0)
                + (i_n > 0 ? rangeSumTabu_nAA[i_n - 1][j_n] : 0)
                + (j_n > 0 ? rangeSumTabu_nAA[i_n][j_n - 1] : 0)
                - ((i_n > 0 && j_n > 0) ? rangeSumTabu_nAA[i_n - 1][j_n - 1] : 0);
        }
    }

    let rangeSum_fn = (r1_n, r2_n, c1_n, c2_n) => {
        return rangeSumTabu_nAA[r2_n][c2_n]
            - ((c1_n > 0) ? rangeSumTabu_nAA[r2_n][c1_n - 1] : 0)
            - ((r1_n > 0) ? rangeSumTabu_nAA[r1_n - 1][c2_n] : 0)
            + ((r1_n > 0 && c1_n > 0) ? rangeSumTabu_nAA[r1_n - 1][c1_n - 1] : 0);
    }

    let waysToCutTabu_nAAA = Array(pizza_sA.length).fill().map(
        () => Array(pizza_sA[0].length).fill().map(
            () => Array(k_n).fill().map(() => NaN)
        )
    );
    let modCons_n = 1e9 + 7;
    let getWaysToCut_fn = (currRow_n, currCol_n, currCutCount_n) => {
        if (currCutCount_n == k_n)
            return (rangeSum_fn(currRow_n, pizza_sA.length - 1, currCol_n, pizza_sA[0].length - 1)) > 0 ? 1 : 0;
        if (isNaN(waysToCutTabu_nAAA[currRow_n][currCol_n][k_n - currCutCount_n])) {
            let currWaysToCut_n = 0;
            for (let i_n = 1; i_n + currRow_n < pizza_sA.length; ++i_n) {
                currWaysToCut_n = ((currWaysToCut_n)
                    + (rangeSum_fn(currRow_n, currRow_n + i_n - 1, currCol_n, pizza_sA[0].length - 1) > 0
                        ? (getWaysToCut_fn(currRow_n + i_n, currCol_n, currCutCount_n + 1) )
                        : 0))% modCons_n;
            }
            for (let i_n = 1; i_n + currCol_n < pizza_sA[0].length; ++i_n) {
                currWaysToCut_n = ((currWaysToCut_n)
                    + (rangeSum_fn(currRow_n, pizza_sA.length - 1, currCol_n, currCol_n + i_n - 1) > 0
                        ? (getWaysToCut_fn(currRow_n, currCol_n + i_n, currCutCount_n + 1) )
                        : 0))% modCons_n;
            }
            waysToCutTabu_nAAA[currRow_n][currCol_n][k_n - currCutCount_n] = currWaysToCut_n;
        }
        return waysToCutTabu_nAAA[currRow_n][currCol_n][k_n - currCutCount_n];
    };
    return getWaysToCut_fn(0, 0, 1);
};

console.log(ways(["A..", "AAA", "..."], 3));