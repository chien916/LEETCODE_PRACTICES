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
 * @param {string} word
 * @return {number}
 */
Trie.prototype.countWordsEqualTo = function (word) {
    return this._search(word, true);
};

/** 
 * @param {string} prefix
 * @return {number}
 */
Trie.prototype.countWordsStartingWith = function (prefix) {
    return this._search(prefix, false);
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.erase = function (word) {
    let stack_A = [];
    let currNode_A = this.trieTop_A;
    for (let c of word) {
        //if (!currNode_A[1].has(c)) return;//wont happened
        stack_A.push([c, currNode_A]);
        currNode_A = currNode_A[1].get(c);
    }
    currNode_A[0][1]--;
    while (stack_A.length > 0) {
        let currPair_A = stack_A.pop();
        currNode_A = currPair_A[1][1].get(currPair_A[0]);
        //currNode_A[0][0]--;
        currNode_A[0][0]--;
        if (currNode_A[0][0] + currNode_A[0][1] > 0)
            currPair_A[1][1].set(currPair_A[0], currNode_A);
    }
};


/** 
 * @param {string} prefix
 * @param {boolean} end
 * @return {number}
 */
Trie.prototype._search = function (prefix, end) {
    let currNode_A = this.trieTop_A;
    for (let c of prefix) {
        if (!currNode_A[1].has(c)) return 0;
        currNode_A = currNode_A[1].get(c);
    }
    return end ? currNode_A[0][1] : currNode_A[0][0];
}

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.countWordsEqualTo(word)
 * var param_3 = obj.countWordsStartingWith(prefix)
 * obj.erase(word)
 */