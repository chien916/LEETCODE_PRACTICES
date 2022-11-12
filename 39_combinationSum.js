/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 *
 * 知识点：JavaScript中Array深拷贝： [...Array]
 *
 */
var combinationSum = function (candidates, target) {
	candidates = candidates.sort();
	let _return_a = [];
	let _currCand_a = [];
	let backtrack_f = (currInd_n, currSum_n) => {
		if (currInd_n >= candidates.length || currSum_n >= target) { //boundary
			if (currSum_n === target) { //candidate found
				_return_a.push([..._currCand_a]);
			}
			return;
		}
		_currCand_a.push(candidates[currInd_n]);
		backtrack_f(currInd_n, currSum_n + candidates[currInd_n]);
		// backtrack_f(currInd_n + 1, currSum_n + candidates[currInd_n]);
		_currCand_a.pop();
		backtrack_f(currInd_n + 1, currSum_n);
	}
	backtrack_f(0, 0);
	return _return_a;
};

combinationSum([2, 3, 6, 7], 7);