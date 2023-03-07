/**
 * 思路：
 * dp数组存储到当前index，最低的花销为多
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let dp_nA = Array(cost.length).fill(Number.MAX_VALUE);
    let currMinCost_n = Number.MAX_VALUE;
    dp_nA[0] = 0;
    dp_nA[1] = 0;
    for (let i_n = 0; i_n < cost.length-2; ++i_n) {
        dp_nA[i_n+1] = Math.min(dp_nA[i_n+1],dp_nA[i_n]+cost[i_n]);
        dp_nA[i_n+2] = Math.min(dp_nA[i_n+2],dp_nA[i_n]+cost[i_n]);
    }
    return Math.min(dp_nA[cost.length-2]+cost[cost.length-2],dp_nA[cost.length-1]+cost[cost.length-1]);
};