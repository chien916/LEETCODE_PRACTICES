/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let res_s = "";
    let carry_n = 0;
    for (let currInd_n = 0; currInd_n < Math.max(num1.length, num2.length); ++currInd_n) {
        let addDig1_n = num1.charCodeAt(num1.length - 1 - currInd_n) - 48;
        let addDig2_n = num2.charCodeAt(num2.length - 1 - currInd_n) - 48;
        if (isNaN(addDig1_n)) addDig1_n = 0;
        if (isNaN(addDig2_n)) addDig2_n = 0;
        let sum_n = addDig1_n + addDig2_n + carry_n;
        carry_n = Math.floor(sum_n / 10);
        res_s = (sum_n % 10).toString() + res_s;
    }
    if (carry_n > 0) res_s = carry_n.toString() + res_s;
    return res_s;
};

console.log(addStrings("11", "123"));
