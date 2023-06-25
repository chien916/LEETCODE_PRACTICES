/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
    let M_d = new Map()
    let M_s = new Map()
    for (let word of words) {
        let Key = word.charCodeAt(0) + "," + word.charCodeAt(1)
        let M = (word.charCodeAt(0) === word.charCodeAt(1)) ? M_s : M_d
        if (!M.has(Key)) M.set(Key, 0)
        M.set(Key, M.get(Key) + 1)
    }
    //
    let center = 0
    let sides = 0
    for (let [_, val] of M_s) {
        if (val % 2 === 1) center = 1
        sides += Math.floor(val / 2) * 2
    }
    for (let [key, val] of M_d) {
        let key_rev = key.split(",").reverse().join(",")
        if (!M_d.has(key_rev)) continue
        sides += (Math.min(val, M_d.get(key_rev)) * 2)
        M_d.set(key_rev, 0)
    }
    return (center + sides) * 2
};

