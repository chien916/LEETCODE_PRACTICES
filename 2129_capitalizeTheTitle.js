/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
    let strs_A = title.split(" ");
    for (let i_n = 0; i_n < strs_A.length; ++i_n) {
        if (strs_A[i_n].length <= 2) strs_A[i_n] = strs_A[i_n].toLowerCase();
        else strs_A[i_n]
            = strs_A[i_n].substring(0, 1).toUpperCase()
            + strs_A[i_n].substring(1).toLowerCase()
    }
    return strs_A.join(" ");
};