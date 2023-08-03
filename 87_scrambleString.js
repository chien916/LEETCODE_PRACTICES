/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s_1, s_2) {
    let [S_1, S_2] = [[...s_1], [...s_2]].map(
        (S) => S.map((c) => c.charCodeAt(0) - 'a'.charCodeAt(0))
    );
    let to_string = (S) => {
        return S.map((s) => String.fromCharCode(s + 'a'.charCodeAt(0))).join("");
    }
    let C_dfs = new Map();
    let dfs = (S, S_) => {
        let k = `(${to_string(S)})(${to_string(S_)})`;
        if (!C_dfs.has(k)) {
            let a = false;
            let m = 0;
            let d = true;
            for (let i = 0; i < S.length; ++i) {
                m = (m ^ (1 << S[i]) ^ (1 << S_[i]));
                d &&= (S[i] === S_[i]);
            }
            if (d) a = true;//strictly the same
            else if (m) a = false;//proning failed
            else {
                for (let i = 1; i < S.length; ++i) {
                    //try directly splitting
                    if (!a && dfs(S.slice(0, i), S_.slice(0, i)) && dfs(S.slice(i), S_.slice(i))) a = true;
                    //try flip and split
                    if (!a && dfs(S.slice(0, i), S_.slice(-i)) && dfs(S.slice(i), S_.slice(0, -i))) a = true;
                }
            }
            C_dfs.set(k, a);
        }
        return C_dfs.get(k);
    }
    return dfs(S_1, S_2);
};

console.log(isScramble("great", "rgeat"));