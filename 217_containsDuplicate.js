/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let hashSet_M = new Set();
    for (let it_n of nums) {
        if (hashSet_M.has(it_n)) return true;
        else hashSet_M.add(it_n);
    }
    return false;
};