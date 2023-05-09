/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1_nA, nums2_nA) {
    /**
     * 状态定义：dp[i] -> 截至到索引i，符号条件的子数组长度
     * 状态转移：dp[i] 
     * = dp[i-1] + 1 如果nums1[i]=nums2[i]
     * | 0 如果nums1[i]！=nums2[i]
     * 初始状态：dp[0] = 0;
     * 返回结果：max(...dp)
     * 
     * *因为只有上一个状态被需要，所以不需要数组
     */
    let maxLength_n = 0;
    for (let i_n = -nums1_nA.length+1; i_n < nums1_nA.length; ++i_n) {//shifts
        let dp_n = 0;
        for (let j_n = 0; j_n < nums1_nA.length; ++j_n) {
            let adjustedI_n = j_n + i_n;
            dp_n = (nums1_nA[j_n] === nums2_nA[adjustedI_n]) ? (dp_n + 1) : 0;
            maxLength_n = Math.max(maxLength_n, dp_n);
        }
    }
    return maxLength_n;
};

console.log(findLength([1,2,3,2,1],[3,2,1,4,7]));