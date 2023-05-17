/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    //error 1 - boundary case where k is more than the length of nums
    k %= nums.length;
    let helper_A = Array(k);
    for (let i_n = 0; i_n < k; ++i_n)
        helper_A[i_n] = nums[nums.length - k + i_n];
    for (let i_n = 0; i_n < nums.length - k; ++i_n)
        nums[nums.length - 1 - i_n] = nums[nums.length - 1 - i_n - k];
    for (let i_n = 0; i_n < k; ++i_n)
        nums[i_n] = helper_A[i_n];
};