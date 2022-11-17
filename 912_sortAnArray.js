/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
	if (nums.length <= 1) return nums;
	let leftArray_na = sortArray(nums.slice(0, nums.length / 2));
	let rightArray_na = sortArray(nums.slice(nums.length / 2));
	let [leftInd_n, rightInd_n] = [0, 0];
	let combinedArray_na = [];
	while (leftInd_n < leftArray_na.length || rightInd_n < rightArray_na.length) {
		if (leftInd_n >= leftArray_na.length || rightArray_na[rightInd_n] < leftArray_na[leftInd_n]) {
			combinedArray_na.push(rightArray_na[rightInd_n]);
			++rightInd_n;
		} else {
			combinedArray_na.push(leftArray_na[leftInd_n]);
			++leftInd_n;
		}
	}
	return combinedArray_na;
};

