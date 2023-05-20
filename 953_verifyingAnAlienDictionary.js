/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
//NOT COMPLETE
var isAlienSorted = function (words, order) {
    let dict_A = Array(26).fill(NaN);
    const _CCA_n = "a".charCodeAt(0);
    for (let i_n = 0; i_n < 26; ++i_n) {
        dict_A[order[i_n].charCodeAt(0) - _CCA_n] = i_n;
    }
    for (let i_n = 0; i_n < words.length - 1; ++i_n) {
        for(let j_n = 0;j_n<words[i])
        if (dict_A[words[i_n].charCodeAt(0) - _CCA_n]
            > dict_A[words[i_n + 1].charCodeAt(0) - _CCA_n])
            return false;
    }
    return true;
};