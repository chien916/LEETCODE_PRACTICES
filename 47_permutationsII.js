/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
	let bTra_f = (currCand_a, retu_aa, sortedCand_a) => {
		if (currCand_a.length === sortedCand_a.length) {
			retu_aa.push([...currCand_a]);
			return;
		}
		for (let i = 0; i < sortedCand_a.length; ++i) {
			if (isNaN(sortedCand_a[i])) continue;
			if (i - 1 >= 0 && sortedCand_a[i - 1] === sortedCand_a[i]) continue;
			currCand_a.push(sortedCand_a[i]);//temporary 1
			sortedCand_a[i] = NaN;//temporary 2
			bTra_f(currCand_a, retu_aa, sortedCand_a);
			sortedCand_a[i] = currCand_a.pop();//revert 1 2
		}
	}
	let retu_aa = [];
	bTra_f([], retu_aa, nums.sort((a, b) => a - b));
	return retu_aa;
};

permuteUnique([1, 1, 2]);