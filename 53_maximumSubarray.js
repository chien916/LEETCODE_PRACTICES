/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let everMax_n = -10e4;
    let prevMax_n = -10e4;
    for (let currInd_n = 0; currInd_n < nums.length; ++currInd_n) {
        prevMax_n = Math.max(prevMax_n + nums[currInd_n], nums[currInd_n]);
        if (prevMax_n > everMax_n) everMax_n = prevMax_n;
    }
    return everMax_n;
    
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
