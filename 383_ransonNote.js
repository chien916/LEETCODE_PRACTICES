/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const _CCS_N = "a".charCodeAt(0);
    let hmap_A = Array(26).fill(0);
    for (let i_n = 0; i_n < magazine.length; ++i_n) {
        hmap_A[magazine.charCodeAt(i_n) - _CCS_N] += 1;
    }
    for (let i_n = 0; i_n < ransomNote.length; ++i_n) {
        if (--hmap_A[ransomNote.charCodeAt(i_n) - _CCS_N] < 0) return false;
    }
    return true;
};