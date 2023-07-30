/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (d, V_w) {


    d = "{" + d;
    let l_d = d.length;
    //state machine
    let M = Array(l_d).fill().map(
        () => Array(26).fill(null)
    );

    let g_cc = (c) => c.charCodeAt(0) - "a".charCodeAt(0);
    for (let i = l_d - 2; i > -1; --i) {
        M[i] = [...M[i + 1]];
        M[i][g_cc(d.charAt(i + 1))] = i + 1;
    }
    let s_dfs = (s = "", i_d = 0, i_s = 0) => {
        if (i_s === s.length) return i_d;
        i_d = M[i_d][g_cc(s.charAt(i_s))];
        if (i_d === null) return null;
        else return s_dfs(s, i_d, i_s + 1);
    }

    let a = 0;
    for (let w of V_w) {
        if (s_dfs(w) !== null) ++a;
    }
    return a;
};

