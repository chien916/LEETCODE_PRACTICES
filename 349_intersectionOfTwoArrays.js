/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
	let hmap_A = Array(1000).fill(0);
	for (let it_n of nums1)
		hmap_A[it_n] = 1;
	for (let it_n of nums2)
		if (hmap_A[it_n] === 1) hmap_A[it_n] = 2;
	let _ret_A = [];
	for (let i_n = 0; i_n < 1000; ++i_n) {
		if (hmap_A[i_n] === 2) _ret_A.push(i_n);
	}
	return _ret_A;
};