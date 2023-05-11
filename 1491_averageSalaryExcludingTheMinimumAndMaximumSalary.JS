/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
    let extrem_ = [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
    let sum_n = 0;
    for (let it_n of salary) {
        sum_n += it_n;
        if (it_n < extrem_[0]) extrem_[0] = it_n;
        if (it_n > extrem_[1]) extrem_[1] = it_n;
    }
    return (sum_n - extrem_[0] - extrem_[1]) / (salary.length - 2);
};