/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
    /**
     * Use array as basis for Trie node data structure
     * [curr char,is end,next trie(as map)]
     */
    let trieTop = new Map();
    //let trie_A = [false,new Map()];
    //construct trie
    words.forEach((currWord_s)=>{
        let currTrie = null;
        currWord_s.forEach((currChar_s,ind_n)=>{
            if(!currTrie){
                
            }
        })
    });
    for(let currWord_s of words){
        let currTrieNode_A = null;
        for(let currChar_s of currWord_s){
            if(!currTrieNode_A){
                trieTop.set(currChar_s,[])
            }
        }
    }
    
};
