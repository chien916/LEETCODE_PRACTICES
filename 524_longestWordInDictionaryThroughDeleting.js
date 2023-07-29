/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s, V_d) {
    let __c = String.fromCharCode("z".charCodeAt(0) + 1);
    s = __c + s;
    V_d = V_d.map((d) => __c + d);
    let gcc = (c) => c.charCodeAt(0) - "a".charCodeAt(0);
    let l_s = s.length;
    let M = Array(l_s).fill().map(
        () => Array(26).fill(null)
    );
   // M[l_s - 1][gcc(s.charAt(l_s - 1))] = l_s - 1;//init driver
    for (let i = l_s - 2; i > -1; --i) {
        for (let j = 0; j < 26; ++j) {
            M[i][j] = M[i + 1][j];
        }
        M[i][gcc(s.charAt(i + 1))] = i + 1;
    }
    let l_d = V_d.length;
    let dfs = (s_d, i_d = 0, i_s = 0) => {
        if (i_d === s_d.length) return true;
        let c = gcc(s_d.charAt(i_d));
        if (M[i_s][c] === null) return false;
        else return dfs(s_d, i_d + 1, M[i_s][c]);
    }
    let a = "";
    for (let i = 0; i < l_d; ++i) {
        if (dfs(V_d[i])) {
            if ((V_d[i].length === a.length && V_d[i] < a) || V_d[i].length > a.length) {
                a = V_d[i];
            }
        }
    }
    return a.slice(1);
};

console.log(findLongestWord("abpcplea", ["abpcplaaa"]))