/**
 * @param {number[]} arr
 * @return {number[]}
 */
var threeEqualParts = function (V_a) {
    let l_a = V_a.length;
    let s = [];
    let c = V_a.reduce((p, v) => p + v, 0);
    if (c === 0) return [0, l_a - 1];
    if (c % 3 !== 0) return [-1, -1];
    let i_rr;
    for (let [i, _c] = [l_a - 1, 0]; _c < c / 3 && i > -1; --i) {
        if (V_a[i] === 1) ++_c;
        s.push(V_a[i]);
        i_rr = i;
    }
    s = s.reverse().join("");
    while (s.length > 0 && s.charAt(0) === "0") s = s.slice(1);
    let [i_l, i_r] = [null, null];
    let [s_l, s_r] = ["", ""];
    let i = 0;
    while (i < l_a && s_l.length < s.length) {
        s_l = s_l + V_a[i];
        while (s_l.length > 0 && s_l.charAt(0) === "0") s_l = s_l.slice(1);
        ++i;
    }
    i_l = i - 1;
    while (i < l_a && s_r.length < s.length) {
        s_r = s_r + V_a[i];
        while (s_r.length > 0 && s_r.charAt(0) === "0") s_r = s_r.slice(1);
        ++i;
    }
    i_r = i - 1;
    if (i_l === null || i_r === null) return [-1, -1];
    if ((s_l) === (s) && (s_r) === (s))
        return [i_l, i_r + 1];
    else return [-1, -1];
};

let p = [0, 0, 0, 0, 0];

console.log(threeEqualParts(p))