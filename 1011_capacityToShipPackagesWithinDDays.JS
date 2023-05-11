/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
    /**
     * 知识点: 以值为基本的二分查找
     * 一般情况下,我们会取一个左索引和右索引,以及计算一个中间索引
     * 这是以索引为基本的二分查找
     * 在本题下,我们取一个符合题目条件的最小值和最大值,计算中间值
     * 这是以值为基本的二分查找
     */

    let min_n = Number.MAX_SAFE_INTEGER;
    let max_n = Number.MIN_SAFE_INTEGER;
    {//make educated guesses on min and max days
        let sum_n = 0;
        let maxEle_n = 0;
        for (let it_n of weights) {
            sum_n += it_n;
            if (it_n > maxEle_n)
                maxEle_n = it_n;
        }
        max_n = sum_n;
        min_n = maxEle_n;
    }

    let shippable_f = (cap_n) => {
        let currDay_n = 1;
        let currCap_n = 0;
        for (let it_n of weights) {
            if (currCap_n + it_n <= cap_n)
                currCap_n += it_n;
            else {
                currCap_n = it_n;
                currDay_n += 1;
            }
            if (currDay_n > days) return false;
        }
        return true;
    }

    for (; ;) {
        //value-based binary search
        let mid_n = (max_n + min_n) >> 1;
        if (max_n - min_n === 1) {
            //bs boundary case -> try both -> one always satisfies
            return shippable_f(min_n)
                ? min_n
                : max_n;
        } else if (shippable_f(mid_n)) {
            max_n = mid_n;
        } else {
            min_n = mid_n;
        }
    }

};

console.log(shipWithinDays([3, 2, 2, 4, 1, 4], 3));