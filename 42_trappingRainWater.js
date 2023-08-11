/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
	/**
	 * 思路
	 * 两个dp数组 一左一右
	 * 左数组每个元素代表从最左到当前的最高高度
	 * 右数组每个元素代表从最右到当前的最高高度
	 * 每个位置储水高度是由左最高高度和右最高高度的较小值决定的
	 */


	let leftDp_nA = new Array(height.length);
	let rightDp_nA = new Array(height.length);

	for (let i_n = 0; i_n < height.length; ++i_n) {
		//知识点：镜像索引=数组长度-1-当前索引
		let reversedI_n = height.length - 1 - i_n;
		if (i_n === 0) {
			leftDp_nA[i_n] = height[i_n];
			rightDp_nA[reversedI_n] = height[reversedI_n];
			continue;
		}
		leftDp_nA[i_n] = Math.max(height[i_n], leftDp_nA[i_n - 1]);
		rightDp_nA[reversedI_n] = Math.max(height[reversedI_n], rightDp_nA[reversedI_n + 1]);
	}

	let totalTrappedWater_n = 0;
	for (let i_n = 1; i_n < height.length - 1; ++i_n) {
		let minWallHeight_n = Math.min(leftDp_nA[i_n - 1], rightDp_nA[i_n + 1]);
		let currWallHeight_n = height[i_n];
		if (currWallHeight_n < minWallHeight_n) {
			totalTrappedWater_n += (minWallHeight_n - currWallHeight_n);
		}
	}

	return totalTrappedWater_n;
};
