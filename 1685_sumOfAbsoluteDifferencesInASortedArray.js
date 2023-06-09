/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function (nums) {
    //d[i] -> sum(abs(num[i]-num[n])) for n=1:nums.length-1
    //conconlusion transfer?? dp??
    let _d_a = [nums.reduce((p_n, it_n) => p_n + (it_n - nums[0]),0)];
    for (let i_n = 1; i_n < nums.length; ++i_n)
        /**
         * delta = nums[i]-nums[i-1] is guaranteed to be positive 
         * delta * i -> grand increase from num[:i)
         * delta * (nums.length-1-i (+1) ) -> grand decrease from num[i:]
         * ** for i, should be included in second interval since moving to the right
         * -> reduces to delta*(2*i-nums.length)
         */
        _d_a[i_n] = (_d_a[i_n - 1]) + (nums[i_n] - nums[i_n - 1]) * (2 * i_n - nums.length);
    return _d_a;
};
// console.log(getSumAbsoluteDifferences([0,1, 2, 3, 4, 5]))
