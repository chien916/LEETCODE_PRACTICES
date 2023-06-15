/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    let = nums[0];
    let _ret_n = 0;
    for (let [i_a, prod_n] = [[0, 0], 1]; i_a[0] < nums.length; ++i_a[0]) {
        i_a[1] = Math.max(i_a[1], i_a[0]);//right ptr must be strictly nbigger than left ptr
        while (i_a[1] <= nums.length - 1 && prod_n * nums[i_a[1]] < k) {
            prod_n *= nums[i_a[1]];
            ++i_a[1];
        }
        //at this point, i[1] points to the LAST element where using that element will NOT exceed k //error1
        _ret_n += (i_a[1] - 1 - i_a[0] + 1);
        if (i_a[0] < i_a[1]) prod_n /= nums[i_a[0]];//error2 
    }
    return _ret_n;
};

console.log(numSubarrayProductLessThanK([57, 44, 92, 28, 66, 60, 37, 33, 52, 38, 29, 76, 8, 75, 22], 18))