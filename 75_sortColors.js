/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
	if (nums.length <= 1) return;
	let isSorted_b = false;
	while (!isSorted_b) {
		isSorted_b = true;
		for (let currInd_n = 0; currInd_n < nums.length - 1; ++currInd_n) {
			if (nums[currInd_n] > nums[currInd_n + 1]) {
				[nums[currInd_n], nums[currInd_n + 1]] = [nums[currInd_n + 1], nums[currInd_n]];
				isSorted_b = false;
			}
		}
	}
};