
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
    /**
     * 思路:环形子数组之和:
     * Kadane's Algorithm算出最大子数组和最小子数组
     * -> 如果子数组不包含边界, 那么可以利用最大子数组(相似于53题)
     * -> 如果子数组包含边界, 那么和可以通过所有元素减去最小子数组算出实际子数组的和
     * 
     * 边界条件:如果所有元素都是负数,那么最小子数组将是所有元素,做差后代表最终子数组为空,不符合题目条件
     */
    let prevMinSum_n = Number.MAX_SAFE_INTEGER;
    let globalMinSum_n = Number.MAX_SAFE_INTEGER;
    let prevMaxSum_n = Number.MIN_SAFE_INTEGER;
    let globalMaxSum_n = Number.MIN_SAFE_INTEGER;
    let sum_n = 0;
    for (let it_n of nums) {
        globalMinSum_n = Math.min(globalMinSum_n, prevMinSum_n = Math.min(prevMinSum_n + it_n, it_n));
        globalMaxSum_n = Math.max(globalMaxSum_n, prevMaxSum_n = Math.max(prevMaxSum_n + it_n, it_n));
        sum_n += it_n;
    }
    return Math.max(globalMaxSum_n, globalMaxSum_n < 0 ? Number.MIN_SAFE_INTEGER : sum_n - globalMinSum_n);
};


// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxSubarraySumCircular = function (nums) {
//     let maxSum_n = Number.MIN_SAFE_INTEGER;
//     for (let i_n = 0; i_n < nums.length; ++i_n) {//number of index shifting
//         let prevSum_n = Number.MIN_SAFE_INTEGER;
//         let j_n = i_n
//         do {
//             maxSum_n = Math.max(maxSum_n, prevSum_n = Math.max(prevSum_n + nums[j_n], nums[j_n]));
//             j_n = (j_n === nums.length - 1) ? 0 : j_n + 1
//         } while (i_n !== j_n)
//         let i = 0;
//     }
//     return maxSum_n;
// };

console.log(maxSubarraySumCircular([1, -2, 3, -2]));