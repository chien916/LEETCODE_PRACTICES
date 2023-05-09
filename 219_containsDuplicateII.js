/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums_nA, k_n) {
    if (nums_nA.length === 1) return false;
    for (let i_n = 0; i_n < nums_nA.length; ++i_n) {
        for (let j_n = i_n + 1; j_n <= i_n + k_n; ++j_n) {
            if (nums_nA[i_n] === nums_nA[j_n]) return true;
        }
    }
    return false;
};