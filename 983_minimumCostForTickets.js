/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (D, C) {
    D.unshift(0);
    let l_d = D.length;
    let DP = Array(l_d).fill();
    DP[0] = 0;
    let [i, i_7, i_30] = [1, 0, 0];
    // for (let i = l_d - 1; i > -1; --i) {
    //     if (D[i] < D[0] + 7 && i_7 === null) i_7 = i;
    //     if (D[i] < D[0] + 30 && i_30 === null) i_30 = i;
    // }
    while (i < l_d) {
        //try one day pass
        DP[i] = DP[i - 1] + C[0];
        //try 7 day pass
        while (i_7 < i && D[i_7 + 1] <= D[i] - 7) {
            ++i_7;
        }
        let dp_7 = DP[i_7] + C[1];
        //try 30 day pass
        while (i_30 < i && D[i_30 + 1] <= D[i] - 30) {
            ++i_30;
        }
        let dp_30 = DP[i_30] + C[2];
        DP[i] = Math.min(DP[i], dp_7, dp_30);
        //console.log(DP[i - 1] + C[0], dp_7, dp_30, " ", DP[i])
        ++i;
    }
    //console.log(DP);
    return DP[l_d - 1];
};