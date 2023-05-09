/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function (word1, word2) {
    const a_n = "a".charCodeAt(0);
    const z_n = "z".charCodeAt(0);
    let hashTable_nA = Array(z_n - a_n + 1).fill(0);
    [...word1].forEach((it_n) => {
        hashTable_nA[it_n.charCodeAt(0)-a_n] += 1;
    });
    [...word2].forEach((it_n) => {
        hashTable_nA[it_n.charCodeAt(0)-a_n] -= 1;
    });
    return hashTable_nA.every((it_n) => Math.abs(it_n) <= 3);
};

console.log(checkAlmostEquivalent("abcdeef","abaaacc"));