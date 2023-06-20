/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
    let _sumN = 0
    let _setM = new Map()
    for (let iN = 0; iN < k; ++iN) {
        _sumN += nums[iN]
        if (!_setM.has(nums[iN])) _setM.set(nums[iN], 0)
        _setM.set(nums[iN], _setM.get(nums[iN]) + 1)
    }
    let _retN = 0
    if (_setM.size === k && _sumN > _retN) _retN = _sumN
    for (let iN = k; ;) {
        //delete left
        _sumN -= nums[iN - k]
        _setM.set(nums[iN-k], _setM.get(nums[iN-k]) - 1)
        if (_setM.get(nums[iN-k]) === 0) _setM.delete(nums[iN-k])

        if (iN === nums.length) break
        //add right
        _sumN += nums[iN]
        if (!_setM.has(nums[iN])) _setM.set(nums[iN], 0)
        _setM.set(nums[iN], _setM.get(nums[iN]) + 1)

        if (_setM.size === k && _sumN > _retN) _retN = _sumN
        
        ++iN
        //
        let _ = null
    }
    return _retN
};

maximumSubarraySum([1,5,4,2,9,9,9],3)