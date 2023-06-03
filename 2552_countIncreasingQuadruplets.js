/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function (nums) {
    let dp_A = Array(nums.length).fill().map(() => {
        Array(2).fill().map(() => {
            Array(4000).fill(0);
        })
    })
};