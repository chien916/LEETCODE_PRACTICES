/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
   // nums = nums.map((it_n) => BigInt(it_n));
    //greedy and two pointers
    let _ret_n = 0;
    let _2ptr_n = [0, nums.length - 1];
    while (_2ptr_n[0] <= _2ptr_n[1]) {
        if (nums[_2ptr_n[0]] === nums[_2ptr_n[1]]) {
            ++_2ptr_n[0];
            --_2ptr_n[1];
        }
        else if (nums[_2ptr_n[0]] > nums[_2ptr_n[1]]) {
            nums[_2ptr_n[1] - 1] += nums[_2ptr_n[1]];
            --_2ptr_n[1];
            ++_ret_n;
        }
        else {
            nums[_2ptr_n[0]+1] += nums[_2ptr_n[0]];
            ++_2ptr_n[0];
            ++_ret_n;
        }
    }
    return _ret_n;
};

