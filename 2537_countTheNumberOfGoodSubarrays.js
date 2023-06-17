/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function (nums, k) {
    /**
     * maintain a counter hashmap within sliding window 
     * to check if the current state is minimum subarray
     * 
     * iterate thru left pointer, adjust right pointer
     * monolithically to the right
     * 
     * right ptr stops at the min range [l:r-1] which forms
     * a valid minimum subarray
     */
    const lenN = nums.length
    let iA = [0, 0]
    let Hm = {}
    let retN = 0
    let countN = 0
    const addF = (currN) => {
        if (!Hm[currN]) Hm[currN] = 0
        else countN -= ((Hm[currN] * (Hm[currN] - 1)) >> 1)
        ++Hm[currN]
        countN += ((Hm[currN] * (Hm[currN] - 1)) >> 1)
    }
    const removeF = (currN) => {
        countN -= ((Hm[currN] * (Hm[currN] - 1)) >> 1)
        if (--Hm[currN] === 0) delete Hm[currN]
        else countN += ((Hm[currN] * (Hm[currN] - 1)) >> 1)
    }
    while (iA[0] < lenN) {
        while (countN < k && iA[1] <= lenN - 1) addF(nums[iA[1]++])
        if (countN >= k) retN += lenN - iA[1] + 1
        else if (iA[1] === lenN) break//
        removeF(nums[iA[0]++])
        //addF(nums[iA[1]++])
    }
    return retN
};

console.log(countGood([2,1,3,1,2,2,3,3,2,2,1,1,1,3,1], 11))