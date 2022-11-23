/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
	if (nums1.length === 0 || nums2.length === 0) return [];
	let sortedNums1_na = nums1.sort();
	let sortedNums2_na = nums2.sort();
	let currNums1Ind_n = 0;
	let currNums2Ind_n = 0;
	while (currNums1Ind_n < sortedNums1_na.length && currNums2Ind_n < sortedNums2_na.length) {

	}
};