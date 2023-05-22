// /**
//  * @param {string[]} words
//  * @return {string[]}
//  */
// var findAllConcatenatedWordsInADict = function (words) {
//     let wordSet = new Set(words);
//     let memory = new Map();
//     let dfs_f = function (word_s, begin_n, end_n) {
//         if (memory.has(word_s)) return memory.get(word_s);
//         let _ret_b = false;
//         for (let i_n = 1; i_n < word_s.length; ++i_n) {
//             if (wordSet.has(word_s.substring(0, i_n))
//                 && (wordSet.has(word_s.substring(i_n)) || dfs_f(word_s.substring(i_n)))) {
//                 _ret_b = true;
//                 break;
//             }
//         }
//         memory.set(word_s, _ret_b);
//         return _ret_b;
//     }
//     let _ret_A = [];
//     for (let word_s of words) {
//         if (dfs_f(word_s)) _ret_A.push(word_s);
//     }
//     return _ret_A;
// };

// console.log(findAllConcatenatedWordsInADict(["cat", "cats", "catsdogcats", "dog", "dogcatsdog", "hippopotamuses", "rat", "ratcatdogcat"]));

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function (words) {
    const memory = new Map();
    const topTrieNode_A = [false, new Map()];
    const wordSet = new Set(words);
    //construct trie
    words.forEach((word_s) => {
        let cTrieNode_A = topTrieNode_A;
        [...word_s].forEach((char_s, ind_n) => {

            let isAtLast_b = ind_n === word_s.length - 1;
            if (!cTrieNode_A[1].has(char_s)) {
                cTrieNode_A[1].set(char_s, [isAtLast_b, new Map()]);
            } else {
          
                cTrieNode_A[1].set(char_s,
                    [cTrieNode_A[1].get(char_s)[0]
                        || isAtLast_b
                        , cTrieNode_A[1].get(char_s)[1]]);
            }
            cTrieNode_A = cTrieNode_A[1].get(char_s);
            // if(topTrieNode_A[1].has('a')){
            //     if(topTrieNode_A[1].get('a')[1].has('a')&&!flag_b){
            //         console.log("has a");
            //         flag_b = true;
            //     }else if(flag_b){
            //         console.log("a is lost");
            //     }
            // }
        })
    });
    //check all words using trie
    let _ret_A = [];
    let dfs_f = (charArr_A, isFirstTrial_b) => {
        //optimization
        let joinedCharArr_s = charArr_A.join("");
        if (memory.has(joinedCharArr_s)) return memory.get(joinedCharArr_s);
        if (wordSet.has(joinedCharArr_s) && !isFirstTrial_b) return true;
        console.log("Looking for " + charArr_A.join(""));
        let currTrieNode = topTrieNode_A;
        for (let i_n = 0; i_n < charArr_A.length; ++i_n) {//for each char in the current word
            if (wordSet.has(charArr_A.slice(0, i_n + 1).join(""))
                || currTrieNode[1].has(charArr_A[i_n])) {//has that char in trie
                if (currTrieNode[1].get(charArr_A[i_n])[0]//reaches word end in trie
                    && ((!isFirstTrial_b && i_n === charArr_A.length - 1)//search complete
                        || dfs_f(charArr_A.slice(i_n + 1), false)))//search partially complete, invoke next recursive dfs
                {
                    console.log("Found");
                    memory.set(joinedCharArr_s, true);
                    return true;
                }
                else//not yet reaches end in trie
                {
                    currTrieNode = currTrieNode[1].get(charArr_A[i_n]);
                }
            } else//does not have that char in trie
            {
                console.log("Not Found");
                memory.set(joinedCharArr_s, false);
                return false;//dead path}
            }
        }
    };
    words.forEach((word_s) => {
        if (dfs_f([...word_s], true)) _ret_A.push(word_s);
    })
    return _ret_A;
}


// let word = ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaaa", "aaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaaa", "aaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaz"];
// let outp = findAllConcatenatedWordsInADict(word);
// console.log(outp);

// //console.log(findAllConcatenatedWordsInADict(["cat","dog","catdog"]));