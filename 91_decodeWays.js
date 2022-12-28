/**
 * @param {string} s
 * @return {number}
 * 
 */
var numDecodings = function (s) {
    let inputString_S = s;
    let dp_nA = Array(inputString_S.length).fill(0);
    [...inputString_S].forEach((_, ind) => {
        let num1 = ind > 0 ? parseInt(inputString_S.slice(ind - 1, ind + 1)) : 0;
        let num2 = parseInt(inputString_S.slice(ind, ind + 1));
        if (1 <= num1 && num1 <= 26&& inputString_S.charAt(ind - 1) !== '0') {
            dp_nA[ind] += ((ind - 2 >= 0) ? dp_nA[ind - 2] : 1);
        }
        if (1 <= num2 && num2 <= 26 ) {
            dp_nA[ind] += ((ind - 1 >= 0) ? dp_nA[ind - 1] : 1);
        }
    });
    return dp_nA[dp_nA.length - 1];
};

let res = numDecodings("12");
console.log(res);
