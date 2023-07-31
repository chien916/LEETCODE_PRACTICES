/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (M) {
    let l_i = M.length;
    let l_j = M[0].length;
    let S = new Set();
    let s_dfs = (i, j, A = []) => {
        A.push([i, j]);
        S.add(i * l_j + j);
        let s = !(i - 1 <= -1 || i + 1 >= l_i || j - 1 <= -1 || j + 1 >= l_j);
        if (i - 1 > -1 && M[i - 1][j] === "O" && !S.has((i - 1) * l_j + j)) s = s_dfs(i - 1, j, A)[1] && s;
        if (i + 1 < l_i && M[i + 1][j] === "O" && !S.has((i + 1) * l_j + j)) s = s_dfs(i + 1, j, A)[1] && s;
        if (j - 1 > -1 && M[i][j - 1] === "O" && !S.has(i * l_j + (j - 1))) s = s_dfs(i, j - 1, A)[1] && s;
        if (j + 1 < l_j && M[i][j + 1] === "O" && !S.has(i * l_j + (j + 1))) s = s_dfs(i, j + 1, A)[1] && s;
        return [A, s];
    }
    for (let i = 0; i < l_i; ++i) {
        for (let j = 0; j < l_j; ++j) {
            if (M[i][j] === "X" || S.has(i * l_j + j)) continue;
            let [A, s] = s_dfs(i, j);
           // console.log(i, j, A, s);
            if (s) {
                for (let [i, j] of A) {
                    M[i][j] = "X";
                }
            }
        }
    }
};

