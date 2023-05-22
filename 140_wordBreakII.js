/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
    let wordSet = new Set(wordDict);
    //let memory = new Map();
    let dfs_f = function (word_s) {
        let _currRet_A = [];
        if (wordSet.has(word_s)) _currRet_A.push(word_s);
        //if (memory.has(word_s) && memory.get(word_s)) return word_s;
        for (let i_n = 1; i_n < word_s.length; ++i_n) {
            for (let s of (wordSet.has(word_s.substring(0, i_n))
                ? dfs_f(word_s.substring(i_n))
                : [])) {
                _currRet_A.push(word_s.substring(0, i_n) + " " + s);
            }
        }
        return _currRet_A;
    }
    let _ret_A = dfs_f(s);
    return _ret_A;
};
