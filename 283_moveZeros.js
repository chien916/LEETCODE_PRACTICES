/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	if (nums.length === 1) return;
	for (let l_i = 0; l_i < nums.length; ++l_i) {
		// 0 1 2 3 length=4 lastInd=3 1
		if (nums[l_i] === 0) {
			//till now, l points to a zero, lets find a non-zero
			for (let r_i = l_i; r_i < nums.length; ++r_i) {
				if (nums[r_i] !== 0) {
					let helper_n = nums[l_i];
					nums[l_i] = nums[r_i];
					nums[r_i] = helper_n;
					break;
				}
			}
		}
	}
};