/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    nums.sort((a_n, b_n) => a_n - b_n);
    for (let i_n = nums.length - 1; i_n >= 1; --i_n)
        if (nums[i_n] === nums[i_n - 1]) nums.splice(i_n, 1);
    if (nums.length < 3) return nums[nums.length - 1];
    else return nums[nums.length - 3];
};

thirdMax([3, 2, 1])