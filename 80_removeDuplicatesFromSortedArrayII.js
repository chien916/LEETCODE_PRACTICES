/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	if (nums.length <= 1) return nums.length;
	let currRightNum_n = nums[0];
	let currRightCount_n = 0;
	let leftInd_n = NaN;
	let rightInd_n = 0;//current number being checked
	while (rightInd_n < nums.length) {

		if (nums[rightInd_n] === currRightNum_n && currRightCount_n >= 2) {//extra found
			nums[rightInd_n] = undefined;
			if (isNaN(leftInd_n))
				leftInd_n = rightInd_n;
			++currRightCount_n;
		} else {
			if (nums[rightInd_n] === currRightNum_n) {//duplicate but not extra found
				++currRightCount_n;
			} else {//not duplicate found
				currRightNum_n = nums[rightInd_n];
				currRightCount_n = 0;
			}
			if (leftInd_n >= 2) {//if shifting is needed
				nums[leftInd_n] = nums[rightInd_n];
				nums[rightInd_n] = undefined;
				while (leftInd_n < rightInd_n && nums[leftInd_n] !== undefined) {
					++leftInd_n;
				}
			}
		}
		++rightInd_n;
	}
	return isNaN(leftInd_n) ? nums.length : leftInd_n;
};

removeDuplicates([0,0,1,1,1,2,3,3]);