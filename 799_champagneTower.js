/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function (x, i_q, j_q) {
    //let _a = 0;
    let DP = [x];
    for (let i = 1; i < i_q + 1; ++i) {
        let DP_ = Array(i + 1).fill();
        for (let j = 0; j < i + 1; ++j) {
            DP_[j] = 0;
            if (j - 1 > -1) {
                DP_[j] += (Math.max(0,DP[j - 1] - 1)) * 0.5;
            }
            if (j < DP.length) {
                DP_[j] += (Math.max(0,DP[j] - 1)) * 0.5;
            }
        }
        //console.log(DP_)
        DP = DP_;
    }
    return Math.min(1,DP[j_q]);
};