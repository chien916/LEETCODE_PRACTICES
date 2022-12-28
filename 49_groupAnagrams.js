/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    if (strs.length === 0) return [[""]];
    let map_M = new Map();//s -> sA
    strs.forEach((it_s) => {
        let currSortedWord_s = [...it_s].sort().join("");
        if (!map_M.has(currSortedWord_s)) map_M.set(currSortedWord_s, []);
        map_M.get(currSortedWord_s).push(it_s);//?should I spread the string?
    });
    return map_M.size === 0 ? [[""]] : [...map_M.values()];
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
