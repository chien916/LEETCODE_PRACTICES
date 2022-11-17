/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 *
 * 易错点1:
 * 从右往左从大排序是是先插大的（粗心）
 */
var merge = function (nums1, m, nums2, n) {
	if (nums2.length === 0) return;
	let [num1LeftInd_n, num1RightInd_n, num2Ind_n] = [m - 1, nums1.length - 1, n - 1];
	while (num1LeftInd_n >= 0 || num2Ind_n >= 0) {
		if (num1LeftInd_n === -1 || nums1[num1LeftInd_n] < nums2[num2Ind_n]) {//!1
			nums1[num1RightInd_n] = nums2[num2Ind_n];
			--num2Ind_n;
		} else {
			nums1[num1RightInd_n] = nums1[num1LeftInd_n];
			--num1LeftInd_n;
		}
		--num1RightInd_n;
	}
};