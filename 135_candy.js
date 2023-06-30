/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (R) {
    if (R.length === 1) return 1;
    let D = Array(R.length).fill(1);
    for (let i = 1; i < R.length; ++i) {
        if (R[i] > R[i - 1]) D[i] = D[i - 1] + 1;
    }
    let ans = D[D.length - 1];
    for (let i = R.length - 2; i > -1; --i) {
        if (R[i] > R[i + 1] && D[i] <= D[i + 1]) D[i] = D[i + 1] + 1;
        ans += D[i];
    }
    return ans;
};