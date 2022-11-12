/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 *
 * 知识点：如果回溯法的的候选数组是排序的，可以在跳出循环的条件内加上比大小
 * - 如果当前的和大于需要的和，那么跳出
 *
 * 易错点：如果回溯法候选数组有重复元素，并且结果不允许有重复元素
 * - 先不要加一，等循环结束后再在函数参数里面加一
 *
 * 混淆点：参考39题，如果某候选元素可以重复使用
 * - 呼叫下一个回溯函数时，索引不要加一
 */
var combinationSum2 = function (candidates, target) {
	candidates.sort(((a, b) => a - b));
	let _return_aa = [];
	let _currCand_a = [];
	let backtrack_f = (currInd_n, currSum_n) => {
		// console.log(_currCand_a);
		if (currInd_n >= candidates.length||currSum_n>target) {
			if (currSum_n === target) {
				_return_aa.push([..._currCand_a]);
			}
			return;
		}
		_currCand_a.push(candidates[currInd_n]);//temporary
		backtrack_f(currInd_n + 1, currSum_n + candidates[currInd_n]);//include
		_currCand_a.pop();//revert
		let t_currInd_n = currInd_n;//!
		while (candidates[t_currInd_n] === candidates[t_currInd_n + 1]) {//!
			++t_currInd_n;
		}
		backtrack_f(t_currInd_n + 1, currSum_n);
	}
	backtrack_f(0, 0);
	return _return_aa;
};

// combinationSum2([2, 5, 2, 1, 2], 5);
// combinationSum2([14, 6, 25, 9, 30, 20, 33, 34, 28, 30, 16, 12, 31, 9, 9, 12, 34, 16, 25, 32, 8, 7, 30, 12, 33, 20, 21, 29, 24, 17, 27, 34, 11, 17, 30, 6, 32, 21, 27, 17, 16, 8, 24, 12, 12, 28, 11, 33, 10, 32, 22, 13, 34, 18, 12],
// 	27)