/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
    if (pattern.length === 1) return words
    let M = new Map()
    let getDiffStr = (word) => {
        let M = new Map()
        for (let char of word) {
            if(!M.has(char)) M.set(char,0)
            M.set(char,M.get(char)+1)
        }
        let Diff = []
        let count = 1
        for (let [l, r] = [0, 0]; l < word.length;) {
            while (r + 1 < word.length && word.charAt(r + 1) === word.charAt(r)) ++r
            Diff.push((r - l + 1).toString()+"^"+M.get(word.charAt(l)).toString())
            l = ++r
        }
        return Diff.join("|")
    }
    for (let word of words) {
        let Diff = getDiffStr(word)
        if (!M.has(Diff)) M.set(Diff, [0, []])
        let Mapped = M.get(Diff)
        ++Mapped[0]
        Mapped[1].push(word)
    }
    let Diff = getDiffStr(pattern)
    if (!M.has(Diff)) return []
    else return M.get(Diff)[1]
};

console.log(findAndReplacePattern(["abc","cba","xyx","yxx","yyx"], "abc"))