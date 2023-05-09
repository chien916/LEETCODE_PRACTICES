
var subarraySum = function (nums_nA, k_n) {
    /**
     * 思路：
     * 对于每一个nums[i]来说，我们想要直到prefixSum[j] for all j<i有几个和nums[i]结合可以组成k
     * 利用哈希表来存储每个prefixSum的值出现过多少次
     * 如果当前prefixSum[i]-prefixSum[j]=k where j<i,那么这就是一个符合条件的i
     * 哈希表正好存储的是有几个j符合当前条件
     * 
     * 因为prefixSum我们只需要上一个，所以不需要用数组，用一个变量代表就够了
     * 
     * 注意，一开始的哈希表应该存储一个{0,1}，这个代表如果什么都不包含，有一个prefixSum将会等于0
     */
    let ret_n = 0;
    let prefixSumCountMap_nnM = new Map();
    prefixSumCountMap_nnM.set(0, 1);
    let currPrefixSum_n = 0;
    nums_nA.forEach((it_n) => {
        currPrefixSum_n += it_n;
        let desiredPrefixSum_n = currPrefixSum_n - k_n;
        if (prefixSumCountMap_nnM.has(desiredPrefixSum_n)) {
            ret_n += prefixSumCountMap_nnM.get(desiredPrefixSum_n);
        }
        if (prefixSumCountMap_nnM.has(currPrefixSum_n)) {
            prefixSumCountMap_nnM.set(currPrefixSum_n, prefixSumCountMap_nnM.get(currPrefixSum_n) + 1);
        } else {
            prefixSumCountMap_nnM.set(currPrefixSum_n, 1);
        }
    });
    return ret_n;
};
// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var subarraySum = function (nums_nA, k_n) {
//     let length_n = nums_nA.length;
//     let ret_n = 0;
//     nums_nA.sort((a_n, b_n) => a_n - b_n);
//     for (let i_n = 0; i_n < length_n; ++i_n) {
//         let currSum_n = 0;
//         for (let j_n = i_n; j_n < length_n; ++j_n) {
//             currSum_n += nums_nA[j_n];
//             if (currSum_n > k_n) break;
//             if (currSum_n === k_n) ret_n += 1;
//         }
//     }
//     return ret_n;
// };

console.log(subarraySum([1, 2, 3], 3));