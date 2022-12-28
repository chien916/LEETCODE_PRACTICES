/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    let res_n = 0;
    for (let ind_n = 0; ind_n < columnTitle.length; ++ind_n) {
        res_n += (columnTitle.charCodeAt(columnTitle.length - 1 - ind_n) - 64) * Math.pow(26, ind_n)
    }
    return res_n;
};
