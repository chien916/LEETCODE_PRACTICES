/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
    let trie = new Trie();
    let _ret_s = "";
    for (let s of words) trie.insert(s);
    for (let s of words) {
        let ok_b = true;
        for (let n = 1; ok_b && n < s.length; ++n) {
            ok_b = trie.search(s.substring(0, n));
        }
        if (ok_b) {
            if (_ret_s === "" || (s.length === _ret_s.length ? s < _ret_s : s.length > _ret_s.length)) _ret_s = s;
        }
    }
    return _ret_s;
};
var Trie = function () {
    this.trieTop_A = [false, new Map()];
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let currNode_A = this.trieTop_A;
    for (let c of word) {
        if (!currNode_A[1].has(c)) currNode_A[1].set(c, [false, new Map()]);
        currNode_A = currNode_A[1].get(c);
    }
    currNode_A[0] = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    return this._search(word, true);
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    return this._search(prefix, false);
};

/** 
 * @param {string} prefix
 * @param {boolean} end
 * @return {boolean}
 */
Trie.prototype._search = function (prefix, end) {

    let currNode_A = this.trieTop_A;
    for (let c of prefix) {
        if (!currNode_A[1].has(c)) return false;
        currNode_A = currNode_A[1].get(c);
    }
    return end ? currNode_A[0] : true;
}

longestWord(["c", "b", "x", "w", "s", "j", "t", "e", "z", "l", "k", "za", "f", "d", "i", "p", "o", "h", "q", "y", "n", "g", "v", "m", "a", "r", "u"]);
