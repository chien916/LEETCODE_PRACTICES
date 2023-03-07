/**
 * 思路：
 * 当前双指针指向当前元素相同的子数组的包含起始索引和不包含结尾索引
 * 每次有两种可能性：
 * 1。上个数是这个数减一，那么要么是上个数的分数，要么是大上个数的分数和这个数的分数,取这两个可能性较大的一个
 * 2。上个数不是这个数减一，那么是上个数的分数加上这个数的分数
 * 
 * 
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
    nums.sort((a, b) => a - b);
    let memScore_nA = [0, 0];
    for (currInds_nA = [0, nums.lastIndexOf(nums[0]) + 1]
        ; currInds_nA[0] < nums.length
        ; currInds_nA = [currInds_nA[1], nums.lastIndexOf(nums[currInds_nA[1]]) + 1]) {
        let currScore_n = nums[currInds_nA[0]] * (currInds_nA[1] - currInds_nA[0]);
        if (currInds_nA[0] > 0 && nums[currInds_nA[0] - 1] === nums[currInds_nA[0]] - 1) {
            let currMaxScore_n = Math.max(memScore_nA[1], memScore_nA[0] + currScore_n);
            [memScore_nA[0], memScore_nA[1]] = [memScore_nA[1], currMaxScore_n];
        } else {
            [memScore_nA[0], memScore_nA[1]] = [memScore_nA[1], memScore_nA[1] + currScore_n];
        }
    }
    return memScore_nA[1];
};

deleteAndEarn([3,3,3,4,2]);