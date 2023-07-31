/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

var solveSudoku = function (M_b) {
    let g_cc = (n) => n.charCodeAt(0) - '0'.charCodeAt(0);
    let M_i = Array(9).fill(0);
    let M_j = Array(9).fill(0);
    let M_g = Array(9).fill(0);
    let V_c = [];
    for (let i = 0; i < 9; ++i) {
        for (let j = 0; j < 9; ++j) {
            if (M_b[i][j] === ".") V_c.push([i, j, null]);
            else {
                let n_c = g_cc(M_b[i][j]);
                M_i[i] |= (1 << n_c);
                M_j[j] |= (1 << n_c);
                M_g[Math.floor(j / 3) * 3 + Math.floor(i / 3)] |= (1 << n_c);
            }
        }
    }
    let l_c = V_c.length;
    let s_dfs = (k = 0) => {
        if (k === 0) {
            let _;
        }
        if (k === l_c) return true;
        let [i, j, _] = V_c[k];
        for (let l = 1; l <= 9; ++l) {
            if ((M_i[i] & (1 << l))) continue;
            if ((M_j[j] & (1 << l))) continue;
            if (M_g[Math.floor(j / 3) * 3 + Math.floor(i / 3)] & (1 << l)) continue;
            M_i[i] |= (1 << l);
            M_j[j] |= (1 << l);
            M_g[Math.floor(j / 3) * 3 + Math.floor(i / 3)] |= (1 << l);
            if (s_dfs(k + 1)) {
                V_c[k][2] = l;
                return true;
            }
            M_i[i] -= (1 << l);
            M_j[j] -= (1 << l);
            M_g[Math.floor(j / 3) * 3 + Math.floor(i / 3)] -= (1 << l);
        }
        return false;
    }
    s_dfs();

    //replace value in original matrix
    for (let [i, j, v] of V_c) {
        M_b[i][j] = v.toString();
    }
};

