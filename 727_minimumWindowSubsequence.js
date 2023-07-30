/**
 * @param {string} s1
 * @param {string} s2
 * @return {string}
 */
var minWindow = function (d, s) {
    let l_d = d.length;

    //state machine
    let M = Array(l_d).fill().map(
        () => Array(26).fill(null)
    );

    let V_s = [];//all good starting index
    for (let i = 0; i < l_d; ++i) {
        if (d.charAt(i) === s.charAt(0)) V_s.push(i);
    }

    let g_cc = (c) => c.charCodeAt(0) - "a".charCodeAt(0);
    for (let i = l_d - 2; i > -1; --i) {
        M[i] = [...M[i + 1]];
        M[i][g_cc(d.charAt(i + 1))] = i + 1;
    }
    let s_dfs = (i_d = 0, i_s = 0) => {
        if (i_s === s.length) return i_d;
        i_d = M[i_d][g_cc(s.charAt(i_s))];
        if (i_d === null) return null;
        else return s_dfs(i_d, i_s + 1);
    }

    //find the smallest window
    let a = "";
    let a_l = Infinity;
    for (let i = V_s.length - 1; i > -1; --i) {
        let i_l = V_s[i];
        let i_r = s_dfs(i_l, 1);
        if (i_r !== null && i_r - i_l + 1 <= a_l) {
            a = d.slice(i_l, i_r + 1);
            a_l = i_r - i_l + 1;
        }
    }
    return a;

};