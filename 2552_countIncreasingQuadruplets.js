/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function (nums) {
    /**
     * dp[i][j][k] 
     * number of elem (less j = 0/greater j =1) than k 
     */
    let dp_A = Array(nums.length).fill().map(() => {
        Array(2).fill().map(() => {
            Array(4000).fill(0);
        })
    })
};