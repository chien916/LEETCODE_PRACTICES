/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let i_r = 0;
    let i = 0;
    while (i <= i_r && i_r < nums.length && i < nums.length) {
        i_r = Math.max(i_r, i + nums[i]);
        ++i;
    }
    return i_r >= nums.length - 1;
};