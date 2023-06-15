/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countExcellentPairs = function (nums, k) {
    /**
     * THEROM:
     * 1. The number of executions of n &= (n-1) is the number of bits
     * 2. For 2 numbers, the sum of their AND and OR is the sum of their set-bits.
     */
    //remove duplicates
    let bits_a = [...new Set(nums)]//remove duplicates
        .map((it_n) => {//get the bit counts of each number
            let bitCount_n = 0;
            for (; it_n !== 0; ++bitCount_n) it_n &= (it_n - 1);
            return bitCount_n;
        })
        .sort((a_n, b_n) => a_n - b_n);//in sorted order
    //two pointers find 
    let _ret_n = 0;
    for (let i_a = [0, bits_a.length - 1]; i_a[0] < bits_a.length; ++i_a[0]) {
        // i[0] pointing to the current element looking at
        // both pointers move in single directions -> O(n) time

        while (i_a[1] >= 0 && bits_a[i_a[0]] + bits_a[i_a[1]] >= k) --i_a[1];
        // now i[1] pointing to the max element so that bits[i[0]]+bits[i[1]] < k

        /**
         * [i[1]:] refers to how many elements that nums[i[0]] can pair with 
         * to form an eligble pair
         * 
         * Defined rule: nums[i[0]] always refer to the SMALLER element (or equal)
         * since nums[i[1]] points the max element so that bits[i[0]]+bits[i[1]] < k
         * when i[1]<=i[0], all elements after i[0] can pair up with nums[i[0]]
         * when i[1]> i[0], only elements after i[1]+1 can pair up with nums[i[1]]
         * 
         * for each eligable pair found, (a,b) and (b,a) can be used, so result =* 2
         */
        if (i_a[1] > i_a[0]) _ret_n += 2 * (bits_a.length - i_a[1] - 1);
        else _ret_n += 2 * (bits_a.length - i_a[0] - 1);

        if (bits_a[i_a[0]] * 2 >= k) ++_ret_n;//self pairing
    }
    return _ret_n;
};

console.log(countExcellentPairs([1, 2, 3, 1], 3))