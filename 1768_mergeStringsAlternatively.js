/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (w_1, w_2) {
    let [i_1, i_2] = [0, 0];
    let [l_1, l_2] = [w_1.length, w_2.length];
    let a = "";
    while (i_1 < l_1 && i_2 < l_2) {
        a = a + w_1.charAt(i_1++) + w_2.charAt(i_2++);
    }
    while (i_1 < l_1) {
        a = a + w_1.charAt(i_1++);
    }
    while (i_2 < l_2) {
        a = a + w_2.charAt(i_2++);
    }
    return a;
};