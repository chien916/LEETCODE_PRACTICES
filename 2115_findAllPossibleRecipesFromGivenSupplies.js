/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function (R, I, S) {
    let M_m = new Map();
    for (let i = 0; i < S.length; ++i) {
        M_m.set(S[i], true);
    }
    let M_r = new Map();
    for (let i = 0; i < R.length; ++i) {
        M_r.set(R[i], I[i]);
    }
    let A = [];
    let check = (Q) => {
        let b = true;
        for (let i = 0; b && i < Q.length; ++i) {
            if (M_m.has(Q[i])) {
                b = M_m.get(Q[i]);
            }
            else if (M_r.has(Q[i])) {
                M_m.set(Q[i], false);
                b = check(M_r.get(Q[i]));
                M_m.set(Q[i], b);
            }
            else b = false;
        }
        return b;
    }
    for (let i = 0; i < R.length; ++i) {
        if (check(I[i])) A.push(R[i]);
    }
    return A;
};