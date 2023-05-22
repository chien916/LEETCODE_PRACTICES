/**
 * @param {string[]} words
 * @return {number[]}
 */
var sumPrefixScores = function (words) {
    let trie = new Trie();
    for (let i_n = 0; i_n < words.length; ++i_n) {
        trie.insert(words[i_n]);
    }

};

var Trie = function () {
    this.trieTop_A = [
        [0, 0]//[count word ends here,count prefix]
        , new Map()];
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let currNode_A = this.trieTop_A;
    for (let c of word) {
        if (!currNode_A[1].has(c)) currNode_A[1].set(c, [[0, 0], new Map()]);
        currNode_A = currNode_A[1].get(c);
        currNode_A[0][0]++;
    }
    currNode_A[0][1]++;
};

/** 
 * @param {string} prefix
 * @param {boolean} end
 * @return {number}
 */
Trie.prototype.search = function (prefix) {
    let stack_A = [];
    let currNode_A = this.trieTop_A;
    for (let c of prefix) {
        if (!currNode_A[1].has(c)) return 0;
        currNode_A = currNode_A[1].get(c);
    }
    return end ? currNode_A[0][1] : currNode_A[0][0];
}

