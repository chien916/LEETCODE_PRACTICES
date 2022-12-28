/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let convert = (str_s) => {
        let res_s = "";
        for (let leftInd_n = 0; leftInd_n < str_s.length;) {
            let rightInd_n = leftInd_n
            for (; str_s.charAt(rightInd_n) === str_s.charAt(leftInd_n)
                ; ++rightInd_n) { };
            res_s += rightInd_n - leftInd_n;
            res_s += str_s[leftInd_n];
            leftInd_n = rightInd_n;
        }
        return res_s;
    }
    let res_s = "1";
    for (; n > 1; --n)
        res_s = convert(res_s);
    return res_s;
};

countAndSay(1);
