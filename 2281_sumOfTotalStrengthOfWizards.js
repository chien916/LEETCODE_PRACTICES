/**
 * @param {number[]} strength
 * @return {number}
 */
var totalStrength = function (strength_nA) {
    /**
     * 思路：
     * 前缀和：
     * prefixSum[i] -> sum(strength[i]) where i = 0:n
     * 
     * 对于任意两个索引在[0:strength.length-1]之中的n,m,那么从n到m为索引的元素和可以表达成
     * prefixSum[m] - prefixSum[n-1] (Kadane's Algorithm)
     * 
     * 从0开始的索引加权前缀和：
     * weightedPrefixSum[i] -> sum(strength[i]*(i)) where i = 0:n
     * 
     * 
     * 单调栈：
     * prevSmallerInd[i] -> 比strength[i]小但是最靠近左侧的值的索引
     * prevSmallerOrEqualInd[i] ->  等于strength[i]或者比strength[i]小但是最靠近右侧的值的索引 (maybe not used?)
     * nextSmallerInd[i] -> 比strength[i]小但是最靠近右侧的值的索引
     * nextSmallerOrEqualInd[i] ->  等于strength[i]或者比strength[i]小但是最靠近右侧的值的索引 (maybe not used?)
     * 
     * 设当前索引值为i，我们想要求出当strength[i]为最小值的所有子数组的”总力量“，定义为currTotalStrength[i],由两部分的乘积组成：
     * 最弱巫师的力量 -> 在此语境下为strength[i]
     * 所有当strength[i]为最弱巫师的所有可能子数组中元素力量之和的和 -> 我们定义这个量为currIndiStrengthSum[i]，求法如下：
     * 
     * 假设a为prevSmallerInd[i],b为nextSmallerInd[i],则
     * 第a+1个元素的力量应被计算一遍，第a+2个元素的力量应被计算两遍，第a+n个元素的力量应被计算n遍，并且n小于i（strength[i]的部分之后单独计算）
     * 可以总结为sum(strength[j]*(j-a) where a<=j<i) 
     * = sum(strength[j]*j)-sum(strength[j]*a) where a<=j<i
     * = (weightedPrefixSum[i]-weightedPrefixSum[a])-(prefixSum[i]-prefixSum[a])*a
     * 
     * 同样的道理，在相反方向，第b-1个元素的力量应被计算一遍，第b-n个元素的力量应该被计算n遍，并且n大于i，可以总结为
     * = sum(strength[j]*(b-j)) where i<j<=b
     * = sum(strength[j]*b) - sum(strength[j]*j) where i<j<=b
     * = (prefixSum[b]-prefixSum[j-1])*b - (weightedPrefixSum[b]-weightedPrefixSum[j-1])
     * 
     * 得出以上的值后，currIndiStrengthSum[i] 
     * = sum(strength[j]*(j-a)） + sum(strength[k]*(b-k)) + strength[i]*((j-a)*(b-j))  where a<=j<i and i<k<=b
     * 
     * 既然currTotalStrength = sum(currIndiStrengthSum[i])*strength[i]，返回currTotalStrength
     * 
     */

    const length_n = strength_nA.length;
    //initialize two prefix sums
    let prefixSum_nA = [strength_nA[0]];
    let weightedPrefixSum_nA = [strength_nA[0] * 0];
    for (let i_n = 1; i_n < length_n; ++i_n) {
        prefixSum_nA[i_n] = prefixSum_nA[i_n - 1] + strength_nA[i_n];
        weightedPrefixSum_nA[i_n] = weightedPrefixSum_nA[i_n - 1] + strength_nA[i_n] * (i_n);
    }

    //initialize two monotonic stacks
    let prevSmallerInd_nA = Array(length_n).fill(-1);
    let nextSmallerOrEqualInd_nA = Array(length_n).fill(-1);
    {
        let forwardMonoStack_nAA = [];
        let reversedMonoStack_nAA = [];
        for (let i_n = 0; i_n < length_n; ++i_n) {
            //forward case -> prev smaller 
            while (forwardMonoStack_nAA.length > 0
                && strength_nA[i_n] <= forwardMonoStack_nAA[forwardMonoStack_nAA.length - 1][1]) {
                let lastElem_nA = forwardMonoStack_nAA.pop();
                nextSmallerOrEqualInd_nA[lastElem_nA[0]] = i_n;
            }
            forwardMonoStack_nAA.push([i_n, strength_nA[i_n]]);
            //reverse case -> next smaller
            let reversedI_n = length_n - 1 - i_n;
            while (reversedMonoStack_nAA.length > 0
                && strength_nA[reversedI_n] < reversedMonoStack_nAA[reversedMonoStack_nAA.length - 1][1]) {
                let lastElem_nA = reversedMonoStack_nAA.pop();
                prevSmallerInd_nA[lastElem_nA[0]] = reversedI_n;
            }
            reversedMonoStack_nAA.push([reversedI_n, strength_nA[reversedI_n]]);
        }
    }

    let ret_n = 0;
    for (let i_n = 0; i_n < length_n; ++i_n) {
        let a_n = prevSmallerInd_nA[i_n];
        let b_n = nextSmallerOrEqualInd_nA[i_n];
        let currTotalStrengthLeft_n
            = ((i_n >= 1) && (weightedPrefixSum_nA[i_n - 1]) - ((a_n >= 0) && weightedPrefixSum_nA[a_n]))
            + ((a_n >= 0) && ((prefixSum_nA[i_n - 1] - prefixSum_nA[a_n]) * (a_n)));
        let currTotalStrengthRight_n
            = ((b_n >= 1) && ((prefixSum_nA[b_n - 1] - prefixSum_nA[i_n]) * (b_n)))//!1 !2
            - ((((b_n >= 0) && weightedPrefixSum_nA[b_n - 1])) - weightedPrefixSum_nA[i_n]);
        let midCountFromLeft_n = (a_n >= 0) ? (i_n - a_n - 1) : i_n;
        let midCountFromRight_n = (b_n >= 0 ? (b_n - i_n - 1) : length_n - 1 - i_n);
        let midCount_n = 0;
        if (midCountFromLeft_n === 0 && midCountFromRight_n === 0) midCount_n = 1;
        else if (midCountFromLeft_n === 0) midCount_n = midCountFromRight_n + 1;
        else if (midCountFromRight_n === 0) midCount_n = midCountFromLeft_n + 1;
        else midCount_n = midCountFromLeft_n * midCountFromRight_n + 1;

        let currTotalStrengthMid_n = strength_nA[i_n] * midCount_n;//!
        let currTotalStrength_n = (currTotalStrengthLeft_n + currTotalStrengthMid_n + currTotalStrengthRight_n) * strength_nA[i_n];
        ret_n += currTotalStrength_n;
    }

    return ret_n;
};
console.log(totalStrength([1, 3, 1, 2]));
//console.log(totalStrength([5, 4, 6]));