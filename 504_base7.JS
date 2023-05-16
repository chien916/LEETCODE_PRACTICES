/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
    //calculate digits needed
    let _ret_n = 0;
    let numAbs_n = Math.abs(num);
    let digitsNeeded_n = Math.floor(Math.log(numAbs_n) / Math.log(7)) + 1;
    for (let i_n = digitsNeeded_n - 1; i_n >= 0; --i_n) {
        let currDigitVal_n = Math.floor(numAbs_n / Math.pow(7, i_n));
        _ret_n += Math.pow(10, i_n) * currDigitVal_n;
        numAbs_n -= currDigitVal_n * Math.pow(7, i_n);
    }
    if (num < 0) _ret_n = -_ret_n;
    return _ret_n.toString();
};

console.log(convertToBase7(-8));