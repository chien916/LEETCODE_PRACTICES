/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 *
 * 知识点：下一个排列算法
 * 1.找到第一个绝对降序的邻居（相等也不行）
 * 2.如果没有找到就直接对数组进行从小到大排序 程序结束
 * 3.如果找到就从右往左找第一个比较大邻居大的值 并且互换他们的位置 （可以是较大邻居左边）
 * 4.互换完，从原本较大邻居的位置右面一个一直到最后进行从小到大排序 程序结束
 */
var nextPermutation = function (nums) {
	if (nums.length <= 1) return;
	let leftInd_n = nums.length - 2;
	//find first descending neighbors
	while (leftInd_n >= 0 && nums[leftInd_n] >= nums[leftInd_n + 1]) {//!
		--leftInd_n;
	}
	if (leftInd_n === -1) {
		seleSort_f(nums);
		return;
	}
	let rightInd_n = nums.length - 1;
	while (rightInd_n > 0&&nums[rightInd_n] <= nums[leftInd_n]) {//!
		--rightInd_n;
	}
	[nums[rightInd_n], nums[leftInd_n]] = [nums[leftInd_n], nums[rightInd_n]];
	seleSort_f(nums, leftInd_n + 1);
};

//Inplace Selection Sort
var seleSort_f = (array_na, startInd_n = 0, endInd_n = array_na.length) => {
	if (startInd_n >= endInd_n - 1) return;//only one element or less or bad order
	for (let leftInd_n = startInd_n; leftInd_n < endInd_n; ++leftInd_n) {
		let minEInd_n = leftInd_n;
		for (let rightInd_n = leftInd_n; rightInd_n < endInd_n; ++rightInd_n) {
			if (array_na[rightInd_n] <= array_na[minEInd_n])
				minEInd_n = rightInd_n;
		}
		[array_na[minEInd_n], array_na[leftInd_n]] = [array_na[leftInd_n], array_na[minEInd_n]];
	}
};

// t = [5, 0, 1, 8, 6, 15, 486, 4, 864, 86];
// seleSort_f(t, 1);
// console.log(t);

// nextPermutation([1,2,3]);

nextPermutation([1,3,2]);