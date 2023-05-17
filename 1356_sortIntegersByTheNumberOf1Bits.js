/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
    
    arr.sort((a_n, b_n) => {
        let diff_n = a_n.toString(2).replaceAll("0", "").length - b_n.toString(2).replaceAll("0", "").length;
        return diff_n === 0 ? a_n - b_n : diff_n;
    });
    return arr;
};