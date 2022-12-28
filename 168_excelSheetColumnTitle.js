/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {

    let res_s = "";
    for (; columnNumber > 0;) {
        --columnNumber;
        res_s = String.fromCharCode(65 + columnNumber % 26).concat(res_s);
        columnNumber = Math.floor(columnNumber / 26);
    }
    return res_s;
};

console.log(convertToTitle(28));
