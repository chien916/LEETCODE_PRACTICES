/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    if (num1 === "0" || num2 === "0") return "0";
    //grid method
    let res_s = "0";
    for (let ind1_n = 0; ind1_n < num1.length; ++ind1_n) {
        for (let ind2_n = 0; ind2_n < num2.length; ++ind2_n) {
            let multDig1_n = num1.charCodeAt(num1.length - 1 - ind1_n) - 48;
            let multDig2_n = num2.charCodeAt(num2.length - 1 - ind2_n) - 48;
            let subRes_s = "0";
            for (; multDig1_n > 0; --multDig1_n) {
                subRes_s = addStrings(subRes_s, multDig2_n.toString());
            }
            subRes_s = subRes_s.padEnd(subRes_s.length + ind1_n + ind2_n, "0");
            res_s = addStrings(subRes_s, res_s);
        }
    }
    return res_s;
};

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


console.log(multiply("123", "456"));
