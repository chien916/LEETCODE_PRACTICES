/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    let _ret = [];
    const HALFLENG_n = nums.length / 2;
    for (let i = 0; i < HALFLENG_n; ++i) {
        _ret.push(nums[i]);
        _ret.push(nums[i + HALFLENG_n]);
    }
    return _ret;
};