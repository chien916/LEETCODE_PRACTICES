/**
 * 思路：
 * 如果有一个数组，对应一个前缀和数组
 * 那么前缀和数组第x和第y个元素做差，就是原数组从x到y子数组的前缀和
 * **做差以后 前缀和将不包括第一个元素，但是包括最后一个元素
 * 
 * 如果某两个不同的数除以一个除数余数均是n，那么两数相减以后再除以刚刚的除数则余数一定为零
 * 
 * 综上所述，如果在前缀和数组中，有两个点除以一个除数余数相等，那么他们做差以后余数则会抵消
 * 也就是说，在对应原数组中以这两个点取子数组，他们之间的和一定可以被刚刚的除数整除
 * 也就是说，只要在前缀数组中，统计每个余数出现的次数，并且对于每个余数来说，出现的次数两两配对
 * --均可以构成一个可以被那个除数整除的子数组
 * 
 * 注意，如果一个前缀和数组中的某个元素是0，代表此位置不用找到另一半，自己就可以成为一个子数组并且符合要求
 * 
 * 错误：
 * Combination中n>=r>=0是前提条件，需要考虑到
 * 负的余数需要特殊处理
 * 0! = 1
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
    let getFactorial = (num_n) => {
        let num_B = BigInt(num_n);
        if(num_B===0n) return 1n;//!
        let sum_n = BigInt(num_B);
        while (num_B > 1)
            sum_n *= --num_B;
        return sum_n;
    }

    let getCombination = (n_n, r_n) => {
        return Number(getFactorial(n_n) / (getFactorial(r_n)*getFactorial(n_n - r_n)));
    }
    //first calculate the prefix sum on each element and store them in a map
    //key,value -> certain divider,remainder\
    let remainderMap_M = new Map();
    let currSum_n = 0;
    for (const num_n of nums) {
        currSum_n += num_n;
        let currRemainder_n = currSum_n % k;
        if(currRemainder_n<0) currRemainder_n += k;
        // console.log(`${currSum_n} , ${currRemainder_n}`);
        remainderMap_M.set(currRemainder_n
            , remainderMap_M.has(currRemainder_n)
                ? remainderMap_M.get(currRemainder_n) + 1
                : 1);
    }

    let totalSubarrCount_n = 0;
    for ([key_n, val_n] of remainderMap_M) {
        if (key_n === 0)
            totalSubarrCount_n += val_n;
        if(val_n<2) continue;//
        totalSubarrCount_n += getCombination(val_n, 2);
        // console.log(`COMB: ${getCombination(val_n, 2)}`)
        
    }
    return totalSubarrCount_n;
};


subarraysDivByK([-1,2,9],2)
// subarraysDivByK([4, 5, 0, -2, -3, 1], 5)