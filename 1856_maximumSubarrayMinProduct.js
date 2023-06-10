/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumMinProduct = function (nums) {
    const _m_n = BigInt(1e9 + 7);
    //subarray min value min bound-> prevSmaller
    let _prevSmaller_a = Array(nums.length).fill(-1);
    {
        let _stack_a = [];
        for (let i_n = nums.length - 1; i_n >= 0; --i_n) {
            while (_stack_a.length > 0 && nums[i_n] < nums[_stack_a[_stack_a.length - 1]])
                _prevSmaller_a[_stack_a.pop()] = i_n;
            _stack_a.push(i_n);
        }
    }
    //subarray min value max bound -> nextSmaller
    let _nextSmaller_a = Array(nums.length).fill(nums.length);
    {
        let _stack_a = [];
        for (let i_n = 0; i_n < nums.length ; ++i_n) {
            while (_stack_a.length > 0 && nums[i_n] < nums[_stack_a[_stack_a.length - 1]])
                _nextSmaller_a[_stack_a.pop()] = i_n;
            _stack_a.push(i_n);
        }
    }
    //subarray sum -> prefSum
    let _prefSum_a = [BigInt(nums[0])];
    {
        for (let i_n = 1; i_n < nums.length; ++i_n)
            _prefSum_a[i_n] = (BigInt(nums[i_n]) + _prefSum_a[i_n - 1]);
    }
    //main
    let _ret_n = 0n;
    {
        for (let i_n = 0; i_n < nums.length; ++i_n) {
            let curr_n
                = BigInt(nums[i_n]) * (_prefSum_a[_nextSmaller_a[i_n] - 1]
                    - (_prevSmaller_a[i_n] < 0 ? 0n : _prefSum_a[_prevSmaller_a[i_n]]));
            if(curr_n>_ret_n) _ret_n = curr_n;
        }
    }
    return Number(_ret_n % _m_n);
};

