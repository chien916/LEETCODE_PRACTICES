/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    //first iteration: value formatting and getting rid of negative values
    for (let ind_n = 0; ind_n < nums.length; ++ind_n) {
        if (1 <= nums[ind_n] && nums[ind_n] <= nums.length) nums[ind_n] += 1;
        else nums[ind_n] = 1;
    }

    //second iteration: assign negativity to corresponding element
    for (let ind_n = 0; ind_n < nums.length; ++ind_n) {
        let decodedValue_n = Math.abs(nums[ind_n]) - 1;
        if (1 <= decodedValue_n && decodedValue_n <= nums.length) {
            if (nums[decodedValue_n - 1] > 0)
                nums[decodedValue_n - 1] = -nums[decodedValue_n - 1];
        }
    }

    //third iteration: check where is the missing positive
    for (let ind_n = 0; ind_n < nums.length; ++ind_n) {
        if (nums[ind_n] > 0) {
            return ind_n + 1;
        }
    }

    //final return: no missing positive
    return nums.length + 1;
};

// let res = firstMissingPositive([1, 2, 0]);
let res = firstMissingPositive([1, 1]);

console.log(res);
