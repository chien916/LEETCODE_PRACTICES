/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    //boundary case handling
    if (words.length === 0) return [];
    let wordLength_n = words[0].length;
    if (s.length < wordLength_n) return [];

    //hash map initialization
    let map_M = new Map();
    words.forEach((it_s) => {
        if (map_M.has(it_s))
            map_M.set(it_s, map_M.get(it_s) + 1);
        else
            map_M.set(it_s, 1);
    });

    //
    let res_nA = [];

    for (let leftInd_n = 0
        ; leftInd_n + (words.length - 1) * wordLength_n < s.length
        ; ++leftInd_n) {
        let currMap_M = new Map(map_M);
        for (let rightInd_n = leftInd_n
            ; rightInd_n < leftInd_n + words.length * wordLength_n
            ; rightInd_n += wordLength_n) {
            let currWord_s = s.slice(rightInd_n, rightInd_n + wordLength_n);
            if (!currMap_M.has(currWord_s) || currMap_M.get(currWord_s) === 0)
                break;
            else {
                currMap_M.set(currWord_s, currMap_M.get(currWord_s) - 1);
                if (currMap_M.get(currWord_s) === 0)
                    currMap_M.delete(currWord_s);
            }
        }
        if (currMap_M.size === 0)
            res_nA.push(leftInd_n);
    }

    return res_nA;
};


let s = "barfoothefoobarman", words = ["foo", "bar"];
console.log(findSubstring(s, words));
