var WordDictionary = function () {
    this.trie = new Trie();
    this.maxLength_n = 0;
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    this.trie.insert(word);
    this.maxLength_n = Math.max(this.maxLength_n, word.length);
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    //console.log("S F :"+word);
    if (word.length > this.maxLength_n) return false;
    let indOfDot_n = word.indexOf(".");
    if (indOfDot_n > -1) {
        for (let c = "a".charCodeAt(0); c <= "z".charCodeAt(0); ++c) {
            if (this.search(word.substring(0, indOfDot_n) + String.fromCharCode(c) + word.substring(indOfDot_n + 1)))
                return true;
        }
        return false;
    }
    else return this.trie.search(word);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

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

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */