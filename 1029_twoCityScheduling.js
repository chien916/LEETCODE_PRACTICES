/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (A) {
    let l_a = A.length;
    /**
     * DP[i][j] -> min. cost of j people flying to city A on i-th iteration
     */
    let DP = Array(l_a).fill().map(
        ()=> Array(l_a).fill(Infinity)
    );
    DP[0][0] = A[0][1];
    DP[0][1] = A[0][0];
    for (let i = 1; i < l_a; ++i) {
        for (let j = 0; j <= (l_a >>> 1); ++j) {//if now j people flying to A
            //this person fly to A -> j-1 people needs to fly to A previously
            let dp_a = j ? (DP[i - 1][j - 1] + A[i][0]) : Infinity;
            //this person fly to B -> j people needs to fly to A previously
            let dp_b = DP[i - 1][j] + A[i][1];
            // reduce answer
            DP[i][j] = Math.min(dp_a, dp_b);
        }
    }
    //console.log(DP)
    return DP[l_a - 1][(l_a >>> 1)];
};