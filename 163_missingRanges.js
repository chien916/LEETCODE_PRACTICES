/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function (nums, lower, upper) {
    if (lower < nums[0]||nums.length===0) nums.unshift(lower-1);
    if (upper > nums[nums.length - 1]) nums.push(upper+1);
    if (nums.length === 1) return [];//boundary
    let missingIntervals_sA = [];
    for (let ind_n = 0; ind_n < nums.length - 1; ++ind_n) {
        let diff_n = nums[ind_n+1] - nums[ind_n];
        if(diff_n===1)
            continue;
        else if(diff_n===2)
            missingIntervals_sA.push((nums[ind_n]+1).toString());
        else
            missingIntervals_sA.push
            ((nums[ind_n]+1).toString()
                +"->"
                +(nums[ind_n+1]-1).toString()
            );
    }
    return missingIntervals_sA;
};

findMissingRanges([0,1,3,50,75],0,99)