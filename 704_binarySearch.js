

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    if (nums.length === 0) return false;
    let binarySearch_f = (leftInd_n, rightInd_n) => {
        if (rightInd_n - leftInd_n <= 1) {
            if (nums[leftInd_n] === target) return leftInd_n;
            else if (nums[rightInd_n] === target) return rightInd_n;
            else return -1;
        }
        let midInd_n = Math.ceil((leftInd_n + rightInd_n) / 2);
        return target <= nums[midInd_n] ? binarySearch_f(leftInd_n, midInd_n) : binarySearch_f(midInd_n, rightInd_n);
    }
    return binarySearch_f(0, nums.length - 1);
};

//二叉树类题型结构定义
let util = require("./_util");
let TreeNode = util.TreeNode;
let formBinaryTree = util.formBinaryTree;


