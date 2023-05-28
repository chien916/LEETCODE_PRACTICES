/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function(nums) {
    /**
     * num[i]=n or n+ 1 and num[i+1]=n or can be achieved after some operations for two elements
     * 1 3 5 -> 1 4 4 -> 2 4 3 -> 3 3 3
     * 1 3 6 -> 1 5 4 -> 3 3 4 
     * for multiple numbers, num[i] = n | n+1 can be achived after some operations
     * however, thsoe operations can only be done when value on the right is bigger.
     */

    let currSum_n = nums[0];
    let currMax_n = nums[0];
    for(let i_n = 1;i_n < nums.length;++i_n){
        currSum_n += nums[i_n];
        currMax_n = Math.max(currMax_n,Math.ceil(currSum_n/i_n));
    }
    return currMax_n;
};

minimizeArrayValue([3,7,1,6])