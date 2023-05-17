/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
    let _ret_n = 0;
    for (let col_n = 0; col_n < strs[0].length; ++col_n) {
        for (let row_n = 0; row_n < strs.length - 1; ++row_n) {
            if (strs[row_n].charCodeAt(col_n) > strs[row_n + 1].charCodeAt(col_n)) {
                _ret_n += 1;
                break;
            }
        }
    }
    return _ret_n;
};