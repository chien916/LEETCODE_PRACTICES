/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if(nums.length===1) return nums[0];
    let currMajority_n = null;
    let currMajorityCount_n = 0;
    let currCount_n = 1;
    nums.sort((a,b)=>a-b);
    let prevNum_n = nums[0];
    for(let i_n = 1;i_n<nums.length;++i_n){
        if(nums[i_n]===prevNum_n)
            currCount_n+=1;
        else
            currCount_n=0;
        if(currCount_n>=currMajorityCount_n){
                currMajority_n = nums[i_n];
                currMajorityCount_n = currCount_n;
        }             
    }
    return currMajority_n;
};
majorityElement([2,2,1,1,1,2,2])