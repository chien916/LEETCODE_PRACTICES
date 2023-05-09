/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
    let isNegative_b = false;
    for (let it_n of nums) {
        if (it_n === 0) return 0;
        else if (it_n < 0) isNegative_b = !isNegative_b;
    }
    return isNegative_b ? -1 : 1;
};