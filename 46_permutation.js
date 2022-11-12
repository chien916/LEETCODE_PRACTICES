/**
 * @param {number[]} nums
 * @return {number[][]}
 * 1529 1544
 * 易错点：子集，排列，组合 之间的区别
 *
 * 此题与78题求所有子集的区别是：
 * - 回溯的可能性：求子集是是否包含当前元素，而求排列是包含哪个元素
 * -
 */
var permute = function (nums) {
	let backtrack_f = (cand_aa, retu_aa, currCand_a) => {
		if (currCand_a.length === nums.length) {
			retu_aa.push([...currCand_a]);
			return;
		}
		for (let i = 0; i < cand_aa.length; ++i) {
			if(isNaN(cand_aa[i])) continue;
			currCand_a.push(cand_aa[i]);//temporary
			let temp =cand_aa[i];
			cand_aa[i] = NaN;//temporary
			backtrack_f(cand_aa,retu_aa, currCand_a);
			cand_aa[i] = temp;//revert
			currCand_a.pop();//revert
		}
	}
	let retu_aa = [];
	backtrack_f(nums,retu_aa, [], 0, 0);
	return retu_aa;
};

permute([1, 2, 3]);