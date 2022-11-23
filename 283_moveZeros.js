/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	let [currLeftInd_n, currRightInd_n] = [0, nums.length - 1];
	while (currLeftInd_n < currRightInd_n) {
		if (nums[currLeftInd_n] === 0) {
			[nums[currLeftInd_n], nums[currRightInd_n]] = [nums[currRightInd_n], nums[currLeftInd_n]];
			--currRightInd_n;
		}
		++currLeftInd_n;
	}
	currLeftInd_n = 0;
	while (currLeftInd_n < currRightInd_n) {
		[nums[currLeftInd_n], nums[currRightInd_n]] = [nums[currRightInd_n], nums[currLeftInd_n]];
		--currRightInd_n;
		++currLeftInd_n;
	}
};
moveZeroes([0,1,0,3,12])