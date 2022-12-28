/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    if (nums.length === 0) return [-1, -1];
    let binarySearch_f = (leftInd_n, rightInd_n) => {
        if (rightInd_n - leftInd_n <= 1) {
            if (nums[rightInd_n] === target) return rightInd_n;
            else if (nums[leftInd_n] === target) return leftInd_n;
            else return -1;
        }
        let midInd_n = Math.ceil((leftInd_n + rightInd_n) / 2);
        let diff_n = nums[midInd_n] - target;
        if (diff_n === 0) return midInd_n;
        else if (diff_n > 0) return binarySearch_f(leftInd_n, midInd_n);
        else return binarySearch_f(midInd_n, rightInd_n);
    }
    let indOfTarg_n = binarySearch_f(0, nums.length - 1);
    if (indOfTarg_n === -1) return [-1, -1];
    let [leftMostIndOfTarg_n, rightMostIndOfTarg_n] = [indOfTarg_n, indOfTarg_n];
    for (; leftMostIndOfTarg_n !== 0;) {
        let indOfTarg_n = binarySearch_f(0, leftMostIndOfTarg_n - 1);
        if (indOfTarg_n === -1) break;
        else leftMostIndOfTarg_n = indOfTarg_n;
    }
    for (; rightMostIndOfTarg_n !== nums.length - 1;) {
        let indOfTarg_n = binarySearch_f(rightMostIndOfTarg_n + 1, nums.length - 1);
        if (indOfTarg_n === -1) break;
        else rightMostIndOfTarg_n = indOfTarg_n;
    }
    return [leftMostIndOfTarg_n, rightMostIndOfTarg_n];
};

// console.log(searchRange([5, 7, 7, 8, 8, 10], 8));


console.log(searchRange([1], 1));
