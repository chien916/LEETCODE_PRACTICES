/**
 * @param {number[]} nums
 * @return {number}
 */
var countTriplets = function (nums) {
    //three loops reduced to two loops by preprocessing
    //store the intermediate result into a map
    //we can do this is because i j k can points to the same value
    let M = new Map()
    let len = nums.length
    for (let i = 0; i < len ; ++i) {
        for (let j = 0; j < len; ++j) {
            let _res = (nums[i] & nums[j])
            if (!M.has(_res)) M.set(_res, 0)
            M.set(_res, M.get(_res) + 1)
        }
    }
    //extracted third loop';
    let ans = 0
    for (let i = 0; i < len; ++i) {
        for (let [key, val] of M) {
            if ((key & nums[i]) === 0) ans += val
        }
    }
    return ans
};

