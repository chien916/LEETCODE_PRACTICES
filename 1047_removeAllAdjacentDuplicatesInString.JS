/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    let i_n = 0;
    let charArr_cA = [...s];
    for (; i_n < charArr_cA.length;) {
        if (charArr_cA[i_n] === charArr_cA[i_n + 1]) {
            charArr_cA.splice(i_n, 2);
            if (i_n > 0) i_n -= 1;
        } else {
            i_n += 1;
        }
    }
    return charArr_cA.join("");
};