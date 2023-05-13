/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function (scores, ages) {
    /**
     * 以O(n^2)为复杂度的动态规划
     * 特点是每一次都要从头到尾都看一遍
     * 
     * 错误1: 排序时尽量考虑如果两个一样会怎么样
     */
    let pairs_A = Array(scores.length).fill().map(() => [null, null, 0]);
    for (let i_n = 0; i_n < scores.length; ++i_n) {
        pairs_A[i_n][0] = scores[i_n];
        pairs_A[i_n][1] = ages[i_n];
    }
    pairs_A.sort((a_A, b_A) => a_A[0] === b_A[0] ? a_A[1] - b_A[1] : a_A[0] - b_A[0]);//!!1
    let _ret_n = 0;
    for (let i_n = 0; i_n < pairs_A.length; ++i_n) {
        for (let j_n = 0; j_n < i_n; ++j_n) {
            if (pairs_A[j_n][1] <= pairs_A[i_n][1]
                && pairs_A[j_n][2] >= pairs_A[i_n][2]) {
                pairs_A[i_n][2] = pairs_A[j_n][2];
            }
        }
        pairs_A[i_n][2] += pairs_A[i_n][0];
        if (pairs_A[i_n][2] > _ret_n) _ret_n = pairs_A[i_n][2];
    }
    return _ret_n;
};
console.log(bestTeamScore([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [811, 364, 124, 873, 790, 656, 581, 446, 885, 134]));